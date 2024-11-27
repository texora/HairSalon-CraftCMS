$("document").ready(function() {

    $(function() {
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > 130) {
                $(".main-header-top").addClass("activeheader");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
                $(".main-header-top").removeClass("activeheader");
            }
        });
    });

    $('.nav-icon').click(function(){
      $(this).toggleClass('open');
       $('.main-header-top').toggleClass('open-header');
    });

    $('.d-nav-icon').click(function(){
      $(this).toggleClass('open');
       $('.desktop-mega-menu').toggleClass('open-mega-menu');
    });

      // Desktop hover functionality
    if(window.innerWidth > 990){
        $('.navbar-light .dmenu').hover(
            function () {
                $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
            },
            function () {
                $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
            }
        );
    }
    if(window.innerWidth < 991){
        $('.navbar-light .dmenu > a').on('click', function(event) {
        // Check if the click target is the span element
            if ($(event.target).is('span') || $(event.target).is('svg')) {
                console.log('Clicked on the span.');
                var submenu = $(this).siblings('.sm-menu');
            // Close other open submenus
            $('.sm-menu').not(submenu).slideUp(105);
            // Toggle the clicked submenu
            submenu.stop(true, true).slideToggle(150);
            } else {
                console.log('Clicked on the text outside the span.');
                var href = $(this).attr('href');
                window.location.href = href;
            }
            // Prevent the default action (navigation)
            event.preventDefault();
        });
    }

        $('#our-services-slider').slick({
            slidesToShow: 4,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 430,
                settings: {
                  slidesToShow: 1.3,
                  centerPadding: '50px'
                }
              }
            ]
        });

        $('#team-slider').slick({
            slidesToShow: 3,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
              {
                breakpoint: 1023,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 430,
                settings: {
                  slidesToShow: 1.3,
                  centerPadding: '50px'
                }
              }
            ]
        });
        $('#grid-two-slider').slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            infinite: false,
        });

});