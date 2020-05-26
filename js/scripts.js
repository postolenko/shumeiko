var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock, dropdownBox, inputVal;

$(window).on('load', function() {

    if($('.masonry').length > 0) {
        $('.masonry').masonry({
          itemSelector: '.grid_item'
        });
    }

});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    // if( $(".portfolio_slider").length > 0 ) {
    //     $(".portfolio_slider").not(".slick-initialized").slick({
    //         dots: true,
    //         arrows: true,
    //         autoplay: true,
    //         autoplaySpeed: 4000,
    //         speed: 1200,
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         // fade: true,
    //         responsive: [
    //             {
    //               breakpoint: 900,
    //               settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //               }
    //             },
    //             {
    //               breakpoint: 540,
    //               settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //               }
    //             }
    //           ]
    //     });
    // }

    $(".dropdown_item").each(function() {
      if(!$(this).hasClass("active")) {
        $(this).find(".dropdown_item_content").css({
          "display" : "none"
        });
      }
    });

    $(".dropdown_item_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_item");
      dropdownBox = parentBlock.find(".dropdown_item_content");
      if(dropdownBox.is(":hidden")) {
        dropdownBox.slideDown(300);
        parentBlock.addClass("active");
      } else {
        dropdownBox.slideUp(300);
        parentBlock.removeClass("active");
      }
    });

    // -----------

    $(".input_box input, .input_box textarea").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".input_box");
        $(".input_box").each(function() {
            inputVal = $(this).find("input, textarea").val();
            if(inputVal == "") {
                $(this).removeClass("active");
            }
        });
        if(!parentBlock.hasClass("active")) {
            parentBlock.addClass("active");
        }
    });


    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".input_box").each(function() {
                inputVal = $(this).find("input, textarea").val();
                if(inputVal == "") {
                    $(this).removeClass("active");
                }
            });
        }
    });

    $(document).mouseup(function (e){
        if(bodyWidth > 1024) {
            hide_element = $(".input_box");
            if (!hide_element.is(e.target)
                && hide_element.has(e.target).length === 0 ) {
                hide_element.each(function() {
                    inputVal = $(this).find("input, textarea").val();
                    if(inputVal == "") {
                        $(this).removeClass("active");
                    }
                });
            }
        }
    });

    // -------------

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
        }
    });
    $("#resp_nav .close_btn").on("click", function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") ) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

});

if($("#map").length > 0) {

  function initMap() {

        // var image = "img/map.svg";
      //   var styles = [
      //     {
      //         "featureType": "water",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#e9e9e9"
      //             },
      //             {
      //                 "lightness": 17
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "landscape",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#f5f5f5"
      //             },
      //             {
      //                 "lightness": 20
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "road.highway",
      //         "elementType": "geometry.fill",
      //         "stylers": [
      //             {
      //                 "color": "#ffffff"
      //             },
      //             {
      //                 "lightness": 17
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "road.highway",
      //         "elementType": "geometry.stroke",
      //         "stylers": [
      //             {
      //                 "color": "#ffffff"
      //             },
      //             {
      //                 "lightness": 29
      //             },
      //             {
      //                 "weight": 0.2
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "road.arterial",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#ffffff"
      //             },
      //             {
      //                 "lightness": 18
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "road.local",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#ffffff"
      //             },
      //             {
      //                 "lightness": 16
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "poi",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#f5f5f5"
      //             },
      //             {
      //                 "lightness": 21
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "poi.park",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#dedede"
      //             },
      //             {
      //                 "lightness": 21
      //             }
      //         ]
      //     },
      //     {
      //         "elementType": "labels.text.stroke",
      //         "stylers": [
      //             {
      //                 "visibility": "on"
      //             },
      //             {
      //                 "color": "#ffffff"
      //             },
      //             {
      //                 "lightness": 16
      //             }
      //         ]
      //     },
      //     {
      //         "elementType": "labels.text.fill",
      //         "stylers": [
      //             {
      //                 "saturation": 36
      //             },
      //             {
      //                 "color": "#333333"
      //             },
      //             {
      //                 "lightness": 40
      //             }
      //         ]
      //     },
      //     {
      //         "elementType": "labels.icon",
      //         "stylers": [
      //             {
      //                 "visibility": "off"
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "transit",
      //         "elementType": "geometry",
      //         "stylers": [
      //             {
      //                 "color": "#f2f2f2"
      //             },
      //             {
      //                 "lightness": 19
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "administrative",
      //         "elementType": "geometry.fill",
      //         "stylers": [
      //             {
      //                 "color": "#fefefe"
      //             },
      //             {
      //                 "lightness": 20
      //             }
      //         ]
      //     },
      //     {
      //         "featureType": "administrative",
      //         "elementType": "geometry.stroke",
      //         "stylers": [
      //             {
      //                 "color": "#fefefe"
      //             },
      //             {
      //                 "lightness": 17
      //             },
      //             {
      //                 "weight": 1.2
      //             }
      //         ]
      //     }
      // ];

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.7048499, lng: 20.5148061},
        scrollwheel: false,
        scaleControl: false,
        zoom: 17,
        // styles: styles
      });

      marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: {lat: 54.7048499, lng: 20.5148061},
        // icon: image,
        title: ''
      });

  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}