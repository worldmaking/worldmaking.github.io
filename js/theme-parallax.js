(function ($) {
    'use strict';

    /*[ Parallax ]
    ===========================================================*/

    try {
        var bgParallax = $('.js-parallax-scroll');
        var posWindow = $(window).scrollTop();
        var hWindow = $(window).height();
        var x = 0;
        var y = 3;

        bgParallax.each(function () {
            var that = $(this);
            var posParallax = that.offset().top;
            var hParallax = that.outerHeight();
            var setPosParallax = function() {
                if ($(window).width() > 992) {
                    if(bgParallax.outerHeight() < $(window).height()) {

                        x = that.offset().top - $(window).scrollTop();

                        $(that).css('background-position','center '+(x/y)+'px');
                    }
                    else {
                        $(that).css('background-position','center', 'center');
                    }
                } else {
                    $(that).css('background-attachment','scroll');
                }
            };

            setPosParallax();

            $(window).on('resize', function(){
                setPosParallax();
            });

            $(window).on('scroll',function(){
                setPosParallax();
            });
        });
    } catch(err) {
        console.log(err);
    }

})(jQuery);