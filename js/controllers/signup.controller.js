define(function(require){

	var Controller = require('controllers/controller'),
			_					 = require('underscore'),
			SignupView = require('../views/signup.view');

	var SignupController = _.extend(new Controller(), {

		navId: 'signup',

		view: SignupView,

		viewContainer: 'signupContainer'
	});

	return SignupController;
});