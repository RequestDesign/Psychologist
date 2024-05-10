import $ from 'jquery';

$('.header_burger-btn').on('click', function(){
	$('.header_mob-menu').slideDown()
})

$('.header_mob-menu .btn-close').on('click', function(){
	$('.header_mob-menu').slideUp()
})
