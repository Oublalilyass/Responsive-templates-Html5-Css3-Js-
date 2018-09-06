/*Global $, alert, console*/
$(function(){
'use stricit';
	/*
	$('html').niceScroll(); 
	$('.header').height($(window).height());
	*/
	//Scroll To Features
	$('.header .arrow i').click(function(){
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		},1000);		
	});	
	$('.hire').click(function(){
		$('html, body').animate({
			scrollTop: $('.Team-work').offset().top
		},1000);		
	});	
    $('.works').click(function(){
		$('html, body').animate({
			scrollTop: $('.Ourwork').offset().top
		},1000);		
	});	

	$('.show-more').click(function(){
		$('.Ourwork .hidden').fadeToggle(500);
	});
	$('.show-more').click(function(){
		$('.show-more').prop("disabled", true);
	});
//
	
	var leftArrow = $('.slider .fa-chevron-left'),
		rightArrow = $('.slider .fa-chevron-right');
	
	function checkClients(){
	$('.clients:first').hasClass('active')? leftArrow.fadeOut() : leftArrow.fadeIn();
    $('.clients:last').hasClass('active')? rightArrow.fadeOut() : rightArrow.fadeIn();
	}
	
	checkClients();
	
	$('.slider i').click(function(){
		if($(this).hasClass('fa-chevron-right')){
			$('.slider .active').fadeOut(100,function(){
				$(this).removeClass('active').next('.clients').addClass('active').fadeIn();
				checkClients();
			});
		}else{
			$('.slider .active').fadeOut(100,function(){
				$(this).removeClass('active').prev('.clients').addClass('active').fadeIn();
				checkClients();
			});
		}
	});
	
});
