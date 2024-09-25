document.addEventListener('DOMContentLoaded', () => {
	const controls = [
	   'play-large', // The large play button in the center
	   'restart', // Restart playback
	   'rewind', // Rewind by the seek time (default 10 seconds)
	   'play', // Play/pause playback
	   //'fast-forward', // Fast forward by the seek time (default 10 seconds)
	   'progress', // The progress bar and scrubber for playback and buffering
	   //'current-time', // The current time of playback
	   'duration', // The full duration of the media
	   'mute', // Toggle mute
	   'volume', // Volume control
	   //'captions', // Toggle captions
	   //'settings', // Settings menu
	   //'pip', // Picture-in-picture (currently Safari only)
	   //'airplay', // Airplay (currently Safari only)
	   'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
	   'fullscreen' // Toggle fullscreen
   ];
   const player = Plyr.setup('.video-player', { controls });

});

$("document").ready(function() {
	$('.nav-product').slick({
		slidesToShow: 3,
		arrows: true,
		dots: false,
		infinite: false,
		responsive: [
	      {
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	        }
	      },
	      {
	        breakpoint: 425,
	        settings: {
	          slidesToShow: 1,
	           centerMode: true,
  			centerPadding: '20px'
	        }
	      }
	    ]
	});
	const slidesToShow = $('.nav-product-salon').hasClass('culture-slider') ? 4 : 3;
	$('.nav-product-salon').slick({
		slidesToShow: slidesToShow,
		arrows: true,
		dots: false,
		infinite: false,
		responsive: [
	      {
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	        }
	      },
	      {
	        breakpoint: 425,
	        settings: {
	          slidesToShow: 1,
	          centerMode: true,
  			centerPadding: '50px'
	        }
	      }
	    ]
	});

	$(function() {
		$(window).on("scroll", function() {
			if ($(window).scrollTop() > 60) {
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

	  // Desktop hover functionality
		$('.navbar-light .dmenu').hover(
		    function () {
		        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
		    },
		    function () {
		        $(this).find('.sm-menu').first().stop(true, true).slideUp(105);
		    }
		);

		$('.navbar-light .dmenu > a').on('click', function(event) {
        // Check if the click target is the span element
        if ($(event.target).is('span')) {
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

});





// Declare a variable to store the video source

if(jQuery('.video-btn').length){
	let videoSrc;

	// Add click event listener to all elements with class "video-btn"
	document.querySelectorAll('.video-btn').forEach(button => {
	  button.addEventListener('click', () => {
	    // Get the video source from the data-src attribute
	    videoSrc = button.dataset.src;
	    console.log(videoSrc);
	  });
	});

	// Add event listener for when the modal is opened
	document.getElementById('video-popup').addEventListener('shown.bs.modal', () => {
	  // Update the video source with autoplay and other options
	  document.getElementById('video').src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
	});

	// Add event listener for when the modal is closed
	document.getElementById('video-popup').addEventListener('hide.bs.modal', () => {
	  // Stop the video by resetting the source
	  document.getElementById('video').src = videoSrc;
	});
}



