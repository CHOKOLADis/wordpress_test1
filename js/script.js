var i=false;
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.navbar').addClass("fix");
        $('div.on_top').css("right","1%");
    }
    else{
        $('div.on_top').css("right","-10%");
        $('.navbar').removeClass("fix");
    }
});

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

$(window).scroll(function() {
        $('.sc_title .letter').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+800) {
                $(this).addClass("fadeIn");
                }
        });
});
$(window).scroll(function() {
        $('.sc_title h2').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+800) {
                $(this).addClass("fadeInUp");
                }
        });
});
    