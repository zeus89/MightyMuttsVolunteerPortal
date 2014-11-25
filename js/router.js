define(function (require){
	var Backbone = require('backbone');

	var updateActiveState = function(navId){
  	$(".nav").find(".active").removeClass("active");
  	$('.nav #' + navId).addClass("active");
	};

	var AppRouter = Backbone.Router.extend({

		routes: {
	    "contacts":      	"contacts",    // #contacts
	    "shifts":        	"shifts",  // #shifts
	    "resources": 			"resources",   // #resources
	    "login": 					"login", // #login
	    "signup":         "signup",
	    "logout":         "logout"
	  },

  	contacts: function() {
	    console.log("contacts router");
	    updateActiveState("contacts");
	  },

	  shifts: function(){
			console.log("shifts router");
			updateActiveState("shifts");
	  },

	  resources: function(){
	  	console.log("resources router");
	  	updateActiveState("resources");
	  },

	  login: function(){
	  	console.log("login router");
	  	updateActiveState("login");
	  },

	  signup: function(){
	  	console.log("signup router");
	  	updateActiveState("signup");
	  },

	  logout: function(){
	  	console.log("logout router");
	  }
	});

	return AppRouter;
});