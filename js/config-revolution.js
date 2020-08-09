(function ($) {
    'use strict';

    /*[ REVOLUTION ]
    ===========================================================*/

    try {
        var revControl = $('.js-rev');
        revControl.each(function () {
            var that = $(this);
            var option = {
                layout: 'auto',
                arrows: true,
                stylearrow: 'uranus',
                hideonleavearrow: false,
                bullets: true,
                stylebullet: 'hermes',
                hideonleavebullet: false,
                hoffbullet: 0,
                voffbullet: 20,
                spacebullet: 5,
                lhoffarrow: 0,
                lvoffarrow: 0,
                rhoffarrow: 0,
                rvoffarrow: 0,
                delay: 8500,
                height: 500,
                fullscreenalignforce: 'off',
                parallaxon: false,
                carouselon: false,
                variable: false

            };

            for (var k in option) {
                if (option.hasOwnProperty(k)) {
                    if (that.attr('data-rev-' + k) != null) {
                        option[k] = that.data('rev-' + k);
                    }
                }
            }

            var tmp = '<span class="tp-bullet-number">{{param1}}</span>';
            if (option.variable === false) {
                tmp = '<span class="tp-bullet-title"></span>';
            }


            if (option.parallaxon === false && option.carouselon === false) {


                that.show().revolution({
                    sliderLayout: option.layout,
                    responsiveLevels: [1201, 1200, 992, 768, 576],
                    gridwidth:[1170, 930, 690, 510, 576],
                    gridheight: [option.height, option.height, option.height, option.height],
                    visibilityLevels:[1201, 1200, 992, 768, 576],
                    delay: option.delay,
                    fullScreenOffsetContainer: "#header, .rev-spacer",
                    disableProgressBar: "on",
                    fullScreenAlignForce: option.fullscreenalignforce,
                    navigation: {
                        onHoverStop: "off",
                        arrows: {
                            enable: option.arrows,
                            style: option.stylearrow,
                            hide_onleave: option.hideonleavearrow,
                            left: {
                                h_offset: option.lhoffarrow,
                                v_offset: option.lvoffarrow
                            },
                            right: {
                                h_offset: option.rhoffarrow,
                                v_offset: option.rvoffarrow
                            }
                        },

                        bullets: {
                            enable: option.bullets,
                            style: option.stylebullet,
                            hide_onleave: option.hideonleavebullet,
                            hide_onmobile: true,
                            h_align: 'center',
                            v_align: 'bottom',
                            h_offset: option.hoffbullet,
                            v_offset: option.voffbullet,
                            space: option.spacebullet,
                            tmp: tmp
                        }
                    }
                });

            }

            if (option.parallaxon === true) {
                that.show().revolution({
                    sliderLayout: option.layout,
                    responsiveLevels: [1201, 1200, 992, 768, 576],
                    gridwidth:[1170, 930, 690, 510, 576],
                    gridheight: [option.height, option.height, option.height, option.height],
                    visibilityLevels:[1201, 1200, 992, 768, 576],
                    parallax: {
                        type:"mouse",
                        origo:"slidercenter",
                        speed:2000,
                        speedbg:0,
                        speedls:0,
                        levels:[4,6,4,5,25,7,12,16,10,50,47,48,49,50,51,55],
                    },
                    delay: option.delay,
                    fullScreenOffsetContainer: "#header",
                    disableProgressBar: "on",
                    fullScreenAlignForce: option.fullscreenalignforce,
                    navigation: {
                        onHoverStop: "off",
                        arrows: {
                            enable: option.arrows,
                            style: option.stylearrow,
                            hide_onleave: option.hideonleavearrow,
                            left: {
                                h_offset: option.lhoffarrow,
                                v_offset: option.lvoffarrow
                            },
                            right: {
                                h_offset: option.rhoffarrow,
                                v_offset: option.rvoffarrow
                            }
                        },

                        bullets: {
                            enable: option.bullets,
                            style: option.stylebullet,
                            hide_onleave: option.hideonleavebullet,
                            h_align: 'center',
                            v_align: 'bottom',
                            h_offset: option.hoffbullet,
                            v_offset: option.voffbullet,
                            space: option.spacebullet
                        }
                    }
                });

            }

            if(option.carouselon === true) {

                that.show().revolution({
                    sliderType:"carousel",
                    sliderLayout: option.layout,
                    responsiveLevels: [1201, 1200, 992, 768, 576],
                    gridwidth:[1170, 930, 690, 510, 576],
                    gridheight: [option.height, option.height, option.height, option.height],
                    visibilityLevels:[1201, 1200, 992, 768, 576],
                    delay: option.delay,
                    fullScreenOffsetContainer: "#header",
                    disableProgressBar: "on",
                    fullScreenAlignForce: option.fullscreenalignforce,
                    carousel: {
                        horizontal_align: "center",
                        vertical_align: "center",
                        fadeout: "on",
                        vary_fade: "off",
                        maxVisibleItems: 3,
                        infinity: "on",
                        space: 40,
                        stretch: "off"
                    },
                    navigation: {
                        onHoverStop: "off",
                        arrows: {
                            enable: option.arrows,
                            style: option.stylearrow,
                            hide_onleave: option.hideonleavearrow,
                            left: {
                                h_offset: option.lhoffarrow,
                                v_offset: option.lvoffarrow
                            },
                            right: {
                                h_offset: option.rhoffarrow,
                                v_offset: option.rvoffarrow
                            }
                        },

                        bullets: {
                            enable: option.bullets,
                            style: option.stylebullet,
                            hide_onleave: option.hideonleavebullet,
                            h_align: 'center',
                            v_align: 'bottom',
                            h_offset: option.hoffbullet,
                            v_offset: option.voffbullet,
                            space: option.spacebullet
                        }
                    }
                });

            }

        });

        $('.au-mouse-wheel').on('click', function (e) {
            $('html').animate({scrollTop: $($(this).attr("href")).offset().top - 65}, 800);
            e.preventDefault();
        });
    } catch (err) {
        console.log(err);
    }

})(jQuery);