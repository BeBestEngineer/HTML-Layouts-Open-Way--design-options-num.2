$(document).ready(function(){
    $.localScroll();
    
    $.extend($.scrollTo.defaults, {        
        offset: -70
    }); 
        
    $(".scroll-to-item").click( function() {       
       $(window).scrollTo( $(this).attr('href'), 1000, {offset: {top:-70, left:0} });       
    });
    
    $(".navbar-button").click( function() {       
        $(".white-background").toggle();
    });
    
    $(".nav-link").click( function() {       
        $(".white-background").toggle();
    });
});