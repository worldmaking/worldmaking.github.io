(function ($) {
    // USE STRICT
    "use strict";

    //-------------------------------------------------------
    // CHECKOUT
    //-------------------------------------------------------

    try {
        
        var radio_input = $('.js-radio-input');
        var content = $('.js-radio-content');

        radio_input.each(function(){
            var that = $(this);
            that.on('change', function(){
                if(that.is(':checked')) {
                    content.slideUp(300);
                    that.parent().parent().find('.js-radio-content').slideDown(300);
                }
            });
        });

    } catch (error) {
        console.log(error);
    }
    
  
})(jQuery);