(function ($) {
    // USE STRICT
    "use strict";

    // MENU SIDEBAR
    try {
        var btnMenusb = $('.js-menusb-btn');
        var menuSb = $('.js-menusb');
        var btnClose = $('#js-close-btn');
        var overlaySb = $('#menu-sidebar-overlay');

        if (menuSb[0]) {

            btnMenusb.on('click', function (e) {
                e.stopPropagation();
                $('#sidebar').toggleClass('active');
                overlaySb.toggleClass('active');
            });

            overlaySb.on('click', function () {
                $('#sidebar').removeClass('active');
                btnMenusb.removeClass('is-active');
                overlaySb.removeClass('active');
            });


            btnClose.on('click', function () {
                $('#sidebar').removeClass('active');
                btnMenusb.removeClass('is-active');
                overlaySb.removeClass('active');
            });


            $(window).on('click', function () {
                if (!$(event.target).closest(menuSb).length && !$(event.target).closest(btnMenusb).length && menuSb.hasClass('active')) {
                    menuSb.removeClass('active');
                    btnMenusb.removeClass('is-active');
                    overlaySb.removeClass('active');
                }
            });



        }
    } catch (error) {
        console.log(error);
    }


})(jQuery);