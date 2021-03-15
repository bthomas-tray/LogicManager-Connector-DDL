/*
	Global connector model config.
	Documentation: https://github.com/trayio/falafel#global-models
*/
module.exports = {
	options: {
		headers: {
			'api-key': '{{{#auth.global_token}}}',
		},
		username: '{{{#auth.username}}}',
		password: '{{{#auth.password}}}',
		json: true,
	},

	baseUrl: 'https://trialaccess.logicmanager.com/api/v1',

	expects: '2xx',
};
