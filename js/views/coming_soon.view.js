define(function (require){
	
    var View = require('./view'),

    ComingSoonView = View.extend({
    	template: '#coming_soon_template'
    });
    
    return ComingSoonView;
});