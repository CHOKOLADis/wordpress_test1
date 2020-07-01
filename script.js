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
    