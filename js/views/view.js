define(function (require){
	
    var Backbone = require('backbone'),
    	$        = require('jquery'),
    	_ 	     = require('underscore'),

    View = Backbone.View.extend({
    	
        initialize: function(options){
            if(options && options.el){
                this.setElement('#' + options.el);
            }
            
            this.render();
        },
        render: function(){
            // Compile the template using underscore
            var template = _.template( $(this.template).html(), {} );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
        }
    });
    
    return View;
});