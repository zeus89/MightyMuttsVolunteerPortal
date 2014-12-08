define(function(require){

	var Controller = require('controllers/controller'),
			_			= require('underscore'),
			ComingSoonView = require('../views/coming_soon.view');

	var ShiftsController = _.extend(new Controller(), {

		navId: 'shifts',

		view: ComingSoonView,

		viewContainer: 'comingSoonContainer'
	});

	return ShiftsController;
});