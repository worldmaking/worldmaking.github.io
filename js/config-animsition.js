(function ($) {
    // USE STRICT
    "use strict";


    //-------------------------------------------------------
    // Config Animsition
    //-------------------------------------------------------

    try {
        var preloader_object = $('.js-preloader');
        preloader_object.animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 800,
            outDuration: 800,
            linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
            loading: true,
            loadingParentElement: 'html',
            loadingClass: 'loader-wrapper',
            loadingInner: '<div class="loader"></div>',
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'html',
            transition: function(url){ window.location.href = url; }
        });

    } catch(err) {
        console.log(err)
    }


})(jQuery);
