(function ($) {
    // USE STRICT
    "use strict";


    //-------------------------------------------------------
    // Config Lightbox2
    //-------------------------------------------------------

    try {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })

    } catch(err) {
        console.log(err);
    }

})(jQuery);
