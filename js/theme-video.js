(function ($) {
    'use strict';

    /*[ Video player ]
    ===========================================================*/

    try {

        var videoPlayerHandle = $('.js-video-player');

        videoPlayerHandle.each(function () {
            var that = $(this);
            var videoPlayerBtn = that.find('.video__overlay');
            var videoPlayerContent = that.find('.video__content');

            var imagesURLs = that.find('.video__cover').attr('src');
            that.css('background-image', 'url(' + imagesURLs + ')');

            videoPlayerBtn.on('click', function (e) {
                videoPlayerContent.children('iframe')[0].src += "rel=0&autoplay=1";
                videoPlayerContent.css('opacity', 1);
                $(this).fadeOut('fast');
                e.preventDefault();
            })

        });

    } catch(err) {
        console.log(err)
    }
})(jQuery);