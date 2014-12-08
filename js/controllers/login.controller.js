define(function(require){

	var Controller 		= require('controllers/controller'),
			_					= require('underscore'),
			LoginView = require('../views/login.view');

	var LoginController = _.extend(new Controller(), {

		navId: 'login',

		viewContainer: 'loginContainer',

		view: LoginView
	});

	return LoginController;
});