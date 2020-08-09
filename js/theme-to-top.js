(function ($) {
    'use strict';

    /*[ TO TOP ]
    ===========================================================*/

    try {
        // Back To Top
        var offset = 450;
        var duration = 500;
        var upToTop = $("#to-top");
        upToTop.hide();
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > offset) {
                upToTop.fadeIn(duration);
            } else {
                upToTop.fadeOut(duration);
            }
        });

        upToTop.on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    } catch (err) {
        console.log(err);
    }


})(jQuery);