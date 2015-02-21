var SelectView = function(container, model) {
	
	this.allDishes = container.find("#allDishes");

	/* var get = model.getAllDishes('starter');
	
	this.getDishes = function() {
		
		var div = '';
		div += '<div class="row"><p>Hej!</p></div>';
		for(i=0;i<get.length;i++){
			var dish = get[i];
			div += "<div class='col-md-3'><br />"
			div += "<center><img src=js/images/"+dish.image+" width=100%><br/><br/>";
			div += "<div id='foodhead'><h4><center>"+dish.name+"</center></h4></div>";
			div += "<p>"+dish.description.substr(0, 80)+"...</p></div>"
		}
		
		//div += "</div>";
		return div;
	};
	*/
	
	this.allDishes.html("hej");
}