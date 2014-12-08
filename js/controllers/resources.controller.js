define(function(require){

	var Controller = require('controllers/controller'),
			_			= require('underscore'),
			ComingSoonView = require('../views/coming_soon.view');

	var ResourcesController = _.extend(new Controller(), {

		navId: 'resources',

		view: ComingSoonView,

		viewContainer: 'comingSoonContainer'
	});

	return ResourcesController;
});