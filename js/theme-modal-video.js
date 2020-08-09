

(function ($) {
    // USE STRICT
    "use strict";

    try {
        var targetModal = $('.js-modal-video');

        targetModal.each(function () {
            var that  = $(this);
            var idVideo = that.data("target");
            var video_content = $(idVideo).find('.modal-video__video');
            var modal_dialog = $(idVideo).find('.modal-dialog');
            var srcOld = video_content.children('iframe').attr('src');
            that.on("click", function () {
                video_content.children('iframe')[0].src += "&autoplay=1";
                setTimeout(function(){
                    $(idVideo).find('.modal-video__video').css('opacity', '1');
                }, 300);
            });

            $(idVideo).on("hidden.bs.modal", function () {
                video_content.children('iframe')[0].src  = srcOld;
                $(this).find('.modal-video__video').css('opacity', '0');
            });

            $(idVideo).on("hide.bs.modal", function (e) {
                modal_dialog.attr("class", "modal-dialog modal-video__dialog animated fadeOut");
            });

            $(idVideo).on('show.bs.modal', function (e) {
                modal_dialog.attr("class", "modal-dialog modal-video__dialog animated fadeIn");
            });
        });

    } catch(err) {
        console.log(err)
    }

})(jQuery);