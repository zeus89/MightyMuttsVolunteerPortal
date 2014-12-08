define(function(require){

	var Controller = require('controllers/controller'),
			_			= require('underscore'),
			ComingSoonView = require('../views/coming_soon.view');

	var AnnouncementsController = _.extend(new Controller(), {

		navId: 'announcements',

		view: ComingSoonView,

		viewContainer: 'comingSoonContainer'
	});

	return AnnouncementsController;
});