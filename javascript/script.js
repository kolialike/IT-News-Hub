jQuery(function($){
	var body = $("body");

	// search
	var iconSearch = $(".icon-search");
	var inpuConteiner = $(".input-conteiner-mobile");
	iconSearch.on("click", function(event){
		inpuConteiner.toggleClass("open");
		event.stopPropagation();
		body.removeClass("push-menu-open");
		galleryItem.removeClass("gallery-popup-open");
	});
	inpuConteiner.on("click", function(event){
		event.stopPropagation();
	});
	body.on("click", function(){
		inpuConteiner.removeClass("open");
	});

	// menu
	var iconMenu = $(".icon-menu");
	iconMenu.on("click", function(event){
		body.toggleClass("push-menu-open");
		event.stopPropagation();
		galleryItem.removeClass("gallery-popup-open");
		inpuConteiner.removeClass("open");
	});
	body.on("click", function(){
		body.removeClass("push-menu-open");
	});
	var headerMenuMobile = $(".header-menu-mobile");
	headerMenuMobile.on("click", function(event){
		event.stopPropagation();
	});

	// popup
	var galleryItem = $(".gallery-item");
	var galleryItemContent = $(".gallery-item-content");
	galleryItemContent.on("click", function(event){
		event.preventDefault();
		$(this).parent(".gallery-item").addClass("gallery-popup-open");
		body.removeClass("push-menu-open");
		inpuConteiner.removeClass("open");
	});

	var galleryPopupClose = $(".gallery-popup-close");
	galleryPopupClose.on("click", function(event){
		event.preventDefault();
		$(this).parents(".gallery-item").removeClass("gallery-popup-open");
	});
	var galleryPopup = $(".gallery-popup");
	var galleryPopupContent = $(".gallery-popup-content");
	galleryPopup.on("click", function(){
		$(this).parents(".gallery-item").removeClass("gallery-popup-open");		
	});
	galleryPopupContent.on("click", function(event){
		event.stopPropagation();	
	});
});