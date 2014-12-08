requirejs.config({
    paths: {
        "jquery": "lib/jquery-1.11.1.min",
        "jquery.bootstrap": "lib/bootstrap.min",
        "backbone": "lib/backbone",
        "backbone.marionette": "lib/backbone.marionette",
        "underscore": "lib/underscore"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        },
        "backbone": {
        	deps: ["underscore"]
        },
        "backbone.marionette": {
        	deps: ["jquery","underscore","backbone"]
        }
    }
});

require(["jquery", "jquery.bootstrap", "backbone", "router", "application_layout_helper"], function($, boostrap, Backbone, router) {

		var appRouter = new router();

		Backbone.history.start();
});