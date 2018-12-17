@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/jquery.flipster.min.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('.menu-line .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });

// sub-menu 
    
    $('.menu li.menu-item-has-children>a').click(function(e){
		e.preventDefault();
		if(window.innerWidth>1279)return ;
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
    }); 
    
    $('.menu li.sub-menu-item-has-children>a').click(function(e){
        e.preventDefault();
		if(window.innerWidth>1279)return ;
        $('.sub-menu ul').not($(this).closest('li').find(' ul')).slideUp('300');	$(this).closest('li').find('ul:first').slideToggle('300');
    }); 
    
    $('.menu li.small-sub-menu-item-has-children>a').click(function(e){
        e.preventDefault();
		if(window.innerWidth>1279)return ;
        $('.sub-menu ul').not($(this).closest('li').find(' ul')).not($(this).closest('li').closest('ul')).slideUp('300');	$(this).closest('li').find('ul:first').slideToggle('300');
    });

// hidden text
    $(".second_part").slideUp(0);
    $(".more-info").click(function(event){
        event.preventDefault();
        $('.second_part').slideDown(500);
		$('.more-info').toggleClass('more-info_active');
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