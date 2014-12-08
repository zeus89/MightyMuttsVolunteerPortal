define(function(require){

	var Controller = require('controllers/controller'),
			_			= require('underscore'),
			ComingSoonView = require('../views/coming_soon.view');

	var ContactsController = _.extend(new Controller(), {

		navId: 'contacts',

		view: ComingSoonView,

		viewContainer: 'comingSoonContainer'
	});

	return ContactsController;
});