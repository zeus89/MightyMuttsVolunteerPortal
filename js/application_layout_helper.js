define(function (require){
	
	var $ = require('jquery');

	var navbarHeight = $('.navbar').height();

	$('#application').css('padding-top', (navbarHeight) + 'px');
});