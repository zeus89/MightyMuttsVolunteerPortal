define(function (require){
	
	var Controller = function(){
		this._view = null;
	};

	var prototype = Controller.prototype;

	prototype.updateActiveState = function(){
  	$(".nav").find(".active").removeClass("active");
  	$('.nav #' + this.navId).addClass("active");
	};

	prototype._addContainer = function(){
		$('#application').append('<div id="' + this.viewContainer + '"></div>');
	};

	prototype.start = function(){
		this.updateActiveState();

		if(this.view && this.viewContainer){
			this._addContainer();
			this._view = new this.view({
				el: this.viewContainer
			});
		}
	};

	prototype.destroy = function(){

		if(this._view){
			this._view.remove();
			this._view = null;
		}
	};

	return Controller;
});