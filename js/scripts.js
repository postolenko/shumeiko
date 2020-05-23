var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock, dropdownBox, inputVal;

$(window).load(function() {



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

});