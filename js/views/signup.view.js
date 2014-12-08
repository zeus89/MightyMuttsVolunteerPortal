define(function (require){
	
    var View = require('./view'),

    SignupView = View.extend({
    	template: '#signup_template'
    });
    
    return SignupView;
});