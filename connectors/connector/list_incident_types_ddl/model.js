const { DDL } = require('@trayio/connector-utils');

module.exports = async params => {
	const response = await falafel.connector.listIncidentTypes(params);
	const lm_issue_fields_enum = [];
	const lm_fields = response.profile.tabs;
	lm_fields.forEach(tab => {
		tab.fields.forEach(field => {
			const obj = {name: null, value: null}
			obj.name = field.name;
			obj.value = field.key;
			lm_issue_fields_enum.push(obj);
		})
	});
	return DDL(lm_issue_fields_enum, 'name', 'value');
};
