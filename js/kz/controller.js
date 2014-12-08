define(function (require){

	var controller = function(){

	};

	var prototype = controller.prototype;

	// array of backbone views
	prototype.views = [];

	// add the view
	prototype.addView = function( backboneView ){
		this.views.push(backboneView);
	};

	// Remove the view
	/*prototype.removeView = function( backboneView, destroy ){
		for( var i = 0; i < this.views.length; i++){
			if(this.views[i] === backboneView){
				this.views.splice(i, 1);

				if( destroy ){
					backboneView.remove();
				}
			}
		}
	};*/

	prototype.destroy = function(){
		var i, view;

		for(i = this.views.length - 1; i >= 0; i--){

			view = this.views.splice(i, 1);

			view.remove();
		}
	};

	return controller;
});