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
        $('.sc-title .letter').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeIn");
                }
        });
});
$(window).scroll(function() {
        $('.sc-title h2').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInUp");
                }
        });
});
$(window).scroll(function() {
        $('.blocks').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInUp");
                }
        });
});
//news1
$(window).scroll(function() {
        $('#news1 .container').children().each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInUp");
                }
        });
});
$(window).scroll(function() {
        $('#news1 .news_img').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("jackInTheBox");
                }
        });
});
//news2
$(window).scroll(function() {
        $('#news2 .container').children().each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInUp");
                }
        });
});
$(window).scroll(function() {
        $('#news2 .news_img').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("jackInTheBox");
                }
        });
});
//blog
$(window).scroll(function() {
        $('#blog .blog').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInUp");
                }
        });
});

$(window).scroll(function() {
        $('#quick_area .icon').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("bounceInRight");
                }
        });
});
$(window).scroll(function() {
        $('#quick_area .area_text').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInLeft");
                }
        });
});

$(window).scroll(function() {
        $('section h3').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeIn");
                }
        });
});
$(window).scroll(function() {
        $('section p').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeIn");
                }
        });
});

$(window).scroll(function() {
        $('.progress').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("slideInRight");
                }
        });
});
$(window).scroll(function() {
        $('.phone').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("bounceIn");
                }
        });
});

$(window).scroll(function() {
        $('.man').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInUp");
                }
        });
});