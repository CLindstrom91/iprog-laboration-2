//ExampleView Object constructor
var ExampleView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests);
	
	this.totalCost = container.find("#totalCost");
	this.dishName = container.find("#dishName");
	this.dishPrice = container.find("#dishPrice");
	

	this.totalCost.html(model.getTotalMenuPrice);
	
	this.dishPrice.html('0.00');
	
	//gets dishes name from menu
	this.getNames = function() {
		var output = '';
		
		var selected = model.getFullMenu();
		if(selected['starter']){
			var starterid = selected.starter;
			var starter = model.getDish(starterid);
			output += starter.name+'<br/>';
		}
		if(selected['main']){
			var mainid = selected.main;
			var main = model.getDish(mainid);
			output += main.name+'<br/>';
		}
		if(selected['dessert']){
			var dessertid = selected.dessert;
			var dessert = model.getDish(dessertid);
			output += dessert.name+'<br/>';
		}
		
		return output;
	
	}
	
	this.dishName.html(this.getNames);
}
 
