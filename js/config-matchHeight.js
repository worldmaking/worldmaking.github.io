(function ($) {
    'use strict';

    /*[ Config MatchHeight ]
    ===========================================================*/

    try {

        var matchHeightItem = $('.js-matchHeight');

        matchHeightItem.matchHeight();

    } catch(err) {
        console.log(err)
    }
})(jQuery);