(function ($) {
    'use strict';

    /*[ Counter Up ]
    ===========================================================*/

    try {

        var counterUpHanlde = $('.js-counterup');

        counterUpHanlde.each(function () {
            $(this).counterUp({
                delay: 10,
                time: 1000
            });
        });

    } catch(err) {
        console.log(err);
    }


})(jQuery);