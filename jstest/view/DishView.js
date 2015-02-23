var SelectView = function (container, model) {

	this.allDishes = container.find("#allDishes");
	
	var get = model.getAllDishes('dessert');

	
	this.getDishes = function() {
	var name = model.getAllIngredients(200);
		var div = '';
		div += '<div class="row">';
		for(i=0;i<1;i++){
			var dish = get[i];
			
			div += "<div class='col-md-5'><div><center><h2>"+ dish.name +"</h2></center></div>"
			div += "<img src=images/"+dish.image+" width=100%><br/><br/>";
			div += "<p>"+dish.description +"</p>"
			div += "<div id='foodhead'><center><button class='btn btn-default' type='submit' style='margin:0% 0% 10% 0%;'>Back to Select Dish</button></center></div>";
			
		}
		
		div += "</div>";
		div += "<div class='row'><div class='col-md-5'><center><h2>Ingredients</h2><p>"+ name +"</p></center></div></div>";
		return div;

	};
		
	this.allDishes.html(this.getDishes);
	
}