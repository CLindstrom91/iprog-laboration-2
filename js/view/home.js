$(function() {
		//We instantiate our model
		var model = new DinnerModel();
		//And create the needed controllers and views
		var homeView = new HomeView($("#application"), model);
});
var HomeView = function(container, model) {
	container.append('<div class="container-fluid" id="header">' +
		'<span class="title">Homelette</span>' +
		'<span class="subtitle">From the best chefs in the world directly into your kitchen</span>' +
		'</div>');
		$("#header").css('background-color', 'rgba(255, 229, 0, 0.75)');
	container.append('<div class="container" id="welcome-box">' +
		'<p id="welcome-title">A home dinner service</p>' +
		'<p id="welcome-text">Lorem ipsum dolor sit amet, ex qui modo instructior, maiorum scaevola deseruisse ei vim. Mucius virtute per in, iudico definiebas interesset his an. Qui mucius scriptorem no, no eam lorem malorum saperet. Duo epicurei philosophia ne. Luptatum intellegam mediocritatem an mel, eos eligendi gubergren hendrerit an, ut eos hinc assum constituto. Ad vix nonumy causae inermis.</p>' +
		'<p id="create-new-dinner-button-descr">Start quickly</p>' +
		'<button id="create-new-dinner" class="btn">Create new dinner</button>' +
		'</div>');
	$("body").css('background-image', 'url("images/icecream.jpg")');
	$("body").css('background-color', '#C9CFD6');
	$("body").css('background-repeat', 'no-repeat');
}