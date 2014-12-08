define(function (require){
	
    var View = require('./view'),

    LoginView = View.extend({
    	template: '#login_template'
    });
    
    return LoginView;
});