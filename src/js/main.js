@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/jquery.flipster.min.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
    
// services-hover
    	
	$('.services__item').mouseenter(function () { 
		$(this).addClass('services__item_active'); 
	});
	
	$('.services__item').mouseleave(function () { 
		$(this).removeClass('services__item_active'); 
	});
    
//carousel slider
    
$(".flipster").flipster({
    style: 'carousel',
    spacing: -0.5,
    buttons: true,
});
    
}); 