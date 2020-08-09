(function ($) {
    // USE STRICT
    "use strict";

    // PROJECT HOVER
    try {
        var fsContainer = $('#fs-container');
        var itemProject = $('.media-project-hover');

        if (fsContainer) {

            itemProject.each(function () {
                var that = $(this);

                that.on('mouseenter', function () {
                    var bg = $(this).data('background');

                    fsContainer.delay(300).queue(function (next) {
                        $(this).css('background-image','url("'+bg+'")');
                        next();
                    });
                });
            });

        }




    } catch (error) {
        console.log(error);
    }


})(jQuery);