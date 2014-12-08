define(function(require){

	var Controller = require('controllers/controller'),
			_			= require('underscore');

	var LogoutController = _.extend(new Controller(), {

		navId: 'logout'
	});

	return LogoutController;
});