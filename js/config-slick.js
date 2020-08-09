(function ($) {
    // USE STRICT
    "use strict";

    // Global variables
    var html_body = $('html, body');


    //-------------------------------------------------------
    // Config Slick
    //-------------------------------------------------------

    try {

        var slick_object = $('.js-slick-wrapper');
        slick_object.each(function () {
            var that = $(this);
            var slick_content = that.find('.js-slick-content');

            var arrow_left = that.find('.js-slick-prev');
            var arrow_right = that.find('.js-slick-next');
            var option = {
                accessibility: true,
                adaptiveheight: false,
                autoplay: false,
                autoplayspeed: 5000,
                arrows: false,
                asnavfor: null,
                appendarrows: $(this),
                appenddots: $(this),
                prevarrow: '<i class="slick-prev"></i>',
                nextarrow: '<i class="slick-next"></i>',
                centermode: false,
                centerpadding: '50px',
                cssease: 'ease',
                dots: false,
                dotsclass: 'slick-dots',
                draggable: true,
                fade: false,
                focuson: false,
                speed: 800,
                pauseonhover: false,
                xl: 1, lg: this.xl, md: this.lg, sm: this.md, xs: this.sm,
                vertical: false,
                loop: true,
                thumb: false,
                customnav: false,
                variablewidth: false,
                variableheight: false,
                swipetoslide: true
            };

            for (var k in option) {
                if (option.hasOwnProperty(k)) {
                    if ($(this).attr('data-slick-' + k) != null) {
                        option[k] = $(this).data('slick-' + k);
                    }
                }
            }

            if (option.customnav === true) {
                option.appendarrows = that.find('.slick__arrows');
                option.appenddots = that.find('.slick__dots');
            }

            var slickAPI = slick_content;

            var animationInString = '[data-animation], [data-animation-in]';
            var animationOutString = '[data-animation-out]';

            slickAPI.on('init reinit', function() {
                var elementAnimate = $(this).find(animationInString);
                elementAnimate.css("visibility", "hidden");
                var firstAnimatingElements = $(this).find('.slick-current [data-animation], .slick-current [data-animation-in]');
                doAnimations(firstAnimatingElements);
            });

            if (option.thumb)
                slickAPI.slick({
                    accessibility: option.accessibility,
                    adaptiveHeight: option.adaptiveheight,
                    autoplay: option.autoplay,
                    autoplaySpeed: option.autoplayspeed,
                    arrows: option.arrows,
                    asNavFor: option.asnavfor,
                    appendArrows: option.appendarrows,
                    appendDots: option.appenddots,
                    prevArrow: option.prevarrow,
                    nextArrow: option.nextarrow,
                    centerMode: option.centermode,
                    centerPadding: option.centerpadding,
                    cssease: option.cssease,
                    dots: option.dots,
                    dotsClass: option.dotsclass,
                    draggable: option.draggable,
                    pauseOnHover: option.pauseonhover,
                    fade: option.fade,
                    focusOnSelect: option.focuson,
                    vertical: option.vertical,
                    slidesToShow: option.xl,
                    slidesToScroll: option.xl,
                    infinite: option.loop,
                    swipeToSlide: option.swipetoslide,
                    speed: option.speed,
                    variableWidth: option.variablewidth,
                    variableHeight: option.variableheight,
                    customPaging: function(slick, index) {
                        var portrait = $(slick.$slides[index]).data('thumb');
                        return '<img src=" ' + portrait + ' "/>';
                    },

                    responsive: [
                        {
                            breakpoint: 1201,
                            settings: {
                                slidesToShow: option.lg,
                                slidesToScroll: option.lg
                            }
                        },
                        {
                            breakpoint: 993,
                            settings: {
                                slidesToShow: option.md,
                                slidesToScroll: option.md,
                                variableWidth: false

                            }
                        },
                        {
                            breakpoint: 769,
                            settings: {
                                slidesToShow: option.sm,
                                slidesToScroll: option.sm,
                                centerPadding: "50px",
                                variableWidth: false
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: option.xs,
                                slidesToScroll: option.xs,
                                fade: false,
                                centerPadding: "50px",
                                variableWidth: false
                            }
                        }
                    ]
                });
            else
                slickAPI.slick({
                    accessibility: option.accessibility,
                    adaptiveHeight: option.adaptiveheight,
                    autoplay: option.autoplay,
                    autoplaySpeed: option.autoplayspeed,
                    arrows: option.arrows,
                    asNavFor: option.asnavfor,
                    appendArrows: option.appendarrows,
                    appendDots: option.appenddots,
                    prevArrow: option.prevarrow,
                    nextArrow: option.nextarrow,
                    centerMode: option.centermode,
                    centerPadding: option.centerpadding,
                    cssease: option.cssease,
                    dots: option.dots,
                    dotsClass: option.dotsclass,
                    draggable: option.draggable,
                    pauseOnHover: option.pauseonhover,
                    fade: option.fade,
                    focusOnSelect: option.focuson,
                    vertical: option.vertical,
                    slidesToShow: option.xl,
                    slidesToScroll: option.xl,
                    infinite: option.loop,
                    swipeToSlide: option.swipetoslide,
                    speed: option.speed,
                    variableWidth: option.variablewidth,
                    variableHeight: option.variableheight,
                    responsive: [
                        {
                            breakpoint: 1201,
                            settings: {
                                slidesToShow: option.lg,
                                slidesToScroll: option.lg
                            }
                        },
                        {
                            breakpoint: 993,
                            settings: {
                                slidesToShow: option.md,
                                slidesToScroll: option.md,
                                variableWidth: false
                            }
                        },
                        {
                            breakpoint: 769,
                            settings: {
                                slidesToShow: option.sm,
                                slidesToScroll: option.sm,
                                centerPadding: "50px",
                                variableWidth: false

                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: option.xs,
                                slidesToScroll: option.xs,
                                fade: false,
                                centerPadding: "20px",
                                variableWidth: false
                            }
                        }
                    ]
                });

            slickAPI.on('afterChange', function(e, slick, currentSlide) {
                var $animatingElements = $(this).find('[data-slick-index="' + currentSlide + '"]').find(animationInString);
                doAnimations($animatingElements);
            });

            slickAPI.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $(this).find('[data-slick-index="' + nextSlide + '"]').find(animationInString);
                if (!($(this).find('[data-slick-index="' + currentSlide + '"]').find(animationOutString).length === 0)) {
                    var $elementAnimateCurrent = $(this).find('[data-slick-index="' + currentSlide + '"]').find(animationOutString);
                    doAnimationsOut($elementAnimateCurrent);
                    return;
                }
                doAnimations($animatingElements);

            });


            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    elements.css("visibility", "visible");
                    var $animationDelay = $(this).data('animation-delay');
                    var $animationType = 'animated ' + $(this).data('animation');
                    if ($(this).data('animation') === undefined)
                        $animationType = 'animated ' + $(this).data('animation-in');
                    $(this).css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $(this).addClass($animationType).one(animationEndEvents, function() {
                        $(this).removeClass($animationType);
                    });
                });
            }

            function doAnimationsOut(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                elements.each(function() {
                    var $animationDelay = "0s";
                    var $animationType = 'animated ' + $(this).data('animation-out');
                    $(this).css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $(this).addClass($animationType).one(animationEndEvents, function() {
                        $(this).removeClass($animationType);
                    });
                    elements.css("visibility", "hidden");
                });
            }

            arrow_left.on('click', function () {
                slick_content.slick('slickPrev');
            });

            arrow_right.on('click', function () {
                slick_content.slick('slickNext');
            });
        });

    } catch(err) {
        console.log(err)
    }

    try {
        $('.js-center-arrow').each(function () {
            var that = $(this);
            var arrow = that.find('.slick-arrow');
            var heightImg = that.find('.js-img').outerHeight();
            var heightArrow = that.find('.slick-arrow').outerHeight();
            var offsetTop = heightImg/2 - heightArrow/2;
            arrow.css('top', offsetTop);
        });
    } catch(err) {
        console.log(err);
    }

})(jQuery);