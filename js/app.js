$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var selectView = new SelectView($("#selectView"), model);

});