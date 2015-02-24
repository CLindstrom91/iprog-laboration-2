var SelectView = function (container, model) {
	
	this.allDishes = container.find("#allDishes");
	
;
	
	this.getDishes = function() {
		
		var div = '';
		var price=0;
			div += '<center><div class="row">';
				var selected = model.getFullMenu();

				var type = ['starter', 'main', 'dessert'];
						
			for(k = 0; k < 3; k++) {
		
    			if(selected[type[k]]){
					if(type[k] == 'starter'){
						var id = selected.starter;
						var t = model.getDish(id);
						var p = model.getDishPrice(id);
						price += p;
						div += "<div class='col-md-2' style='margin: 2% 2% 2% 2%'><center><h2>"+ t.name+ "</h2><img src=images/"+t.image+" width=100%><br/><h5>"+ p +" SEK</h5></center></div>";
					}
						if(type[k] == 'main'){
						var id = selected.main;
						var t = model.getDish(id);
						var p = model.getDishPrice(id);
						price += p;
						div += "<div class='col-md-2' style='margin: 2% 2% 2% 2%'><center><h2>"+ t.name+ "</h2><img src=images/"+t.image+" width=100%><br/><h5>"+ p+" SEK</h5></center></div>";
					}				
						if(type[k] == 'starter'){
						var id = selected.dessert;
						var t = model.getDish(id);
						var p = model.getDishPrice(id);
						price += p;
						div += "<div class='col-md-2' style='margin: 2% 2% 2% 2%'><center><h2>"+ t.name+ "</h2><img src=images/"+t.image+" width=100%><br/><h5>"+ p +" SEK</h5></center></div>";
						div += '<div class="col-md-12"><h2>Total price: '+ price +' KR</h2><br><button class="btn btn-default" type="submit" onclick="p()" >Print full recipe!</button></div>';
					}
					
				}
    		k++;
			return div;
		}
			
			div += '</div></center>';
		return div;
	};
		
	this.allDishes.html(this.getDishes);
	
}

