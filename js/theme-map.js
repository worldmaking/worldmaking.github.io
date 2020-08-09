(function ($) {
    // USE STRICT
    "use strict";
  
    var mapSelector = $('.js-google-map');
  
    function addMaker(makers, map, icon) {
        var marker, i;
        var infowindow = new google.maps.InfoWindow();
        for (i = 0; i < makers.length; i++) {
            var mapText = '<div class="map__box-info"><h4>'+ makers[i][0] +'</h4><p>'+ makers[i][1] +'</p></div>';
  
  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(makers[i][2], makers[i][3]),
                map: map,
                icon: icon,
                animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(mapText);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
  
    mapSelector.each(function () {
        var that = $(this);
  
        var mapStyleDefault = [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 30
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ef8c25"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b6c54c"
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "saturation": -40
                    }
                ]
            },
            {}
        ];
  
        var mapHolder = that.find('.js-map-holder');
        var idMapHolder = mapHolder.attr('id');
  
        var options = {
            makericon: 'images/icons/ic-maker-01.png',
            makers: '[["New Jersey", "Content", 40.543557, -74.127108]]',
            zoom : 17,
            center: new google.maps.LatLng(40.543557, -74.127108),
            scrollwheel: 0,
            navigationcontrol: true,
            maptypecontrol: false,
            scalecontrol: false,
            draggable: 1,
            styles: mapStyleDefault,
            maptypeId: google.maps.MapTypeId.ROADMAP
        };
  
        for (var k in options) {
            if (options.hasOwnProperty(k)) {
                if ($(this).attr('data-' + k) != null) {
                    options[k] = $(this).attr("data-"+k);
                }
            }
        }
  
        var locations = $.parseJSON(options.makers);
        var bound = new google.maps.LatLngBounds();
  
        for (var i = 0; i < locations.length; i++) {
            bound.extend(new google.maps.LatLng(locations[i][2], locations[i][3]));
        }
  
        var mapOptions = {
            zoom: options.zoom,
            scrollwheel: options.scrollwheel,
            navigationControl: options.navigationcontrol,
            mapTypeControl: options.maptypecontrol,
            scaleControl: options.scalecontrol,
            draggable: options.draggable,
            styles: options.styles,
            center: bound.getCenter(),
            mapTypeId: options.maptypeId
        };
  
        var mapAPI = new google.maps.Map(document.getElementById(idMapHolder), mapOptions);
        addMaker(locations, mapAPI, options.makericon);
    });
  
  })(jQuery);