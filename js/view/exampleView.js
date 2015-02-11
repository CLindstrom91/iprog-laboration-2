//ExampleView Object constructor
var ExampleView = function (container, model) {
	

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
		
	this.numberOfGuests.html(model.getNumberOfGuests);
	
}
 
