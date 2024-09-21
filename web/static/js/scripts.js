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
	$('.nav-product-salon').slick({
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



});

// Declare a variable to store the video source
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


