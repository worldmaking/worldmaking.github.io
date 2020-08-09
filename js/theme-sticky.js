(function ($) {
    'use strict';

    /*[STICKY]
    ===========================================================*/

    try {

        var stickyWrap = $("#js-sticky-content");
        var stickyEl = $(".js-sticky");
        var windowWidth = $(window).width();

        if(windowWidth > 992) {
            stickyEl.each(function () {
                var that = $(this);

                var stickyTop = that.offset().top;

                $(window).on('scroll', function () {
                    if ($(window).scrollTop() > stickyTop) {
                        that.addClass("sticky");
                        that.css('width', stickyWrap.outerWidth(true));
                    } else {
                        that.removeClass("sticky");
                        that.css('width', "100%");
                    }
                });

            });
        }

    } catch (err) {
        console.log(err);
    }


})(jQuery);