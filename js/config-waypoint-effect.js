(function ($) {
    'use strict';

    /*[ Waypoint effect ]
    ===========================================================*/
    try {
        var flyLine = $('.js-line');
        flyLine.each(function () {
            var that = $(this);
            var executed = false;
            $(window).on('load', function () {
                that.waypoint(function () {
                    if (!executed) {
                        executed = true;
                        /*FLY LINE*/
                        var lineItem = that.find('.line');
                        lineItem.addClass('active');
                    }
                }, {offset: 'bottom-in-view'});
            })

        });
    } catch (err) {
        console.log(err);
    }

})(jQuery);