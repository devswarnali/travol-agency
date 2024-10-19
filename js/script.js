$('.slider').slick({
  dots: true,
  arrow: false,
  fade: true,
  speed: 1800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
})

$('.destination-slide').slick({
  dots: true,
  arrow: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})

$('.travel-slide').slick({
  dots: true,
  arrow: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
})

$('.travel-exp-slide').slick({
  dots: false,
  arrow: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})

$('.testimonials-slide').slick({
  dots: true,
  arrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
})

$('.social-slide').slick({
  dots: false,
  arrow: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
})

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});



 // Sticky Nav
    
 $(window).scroll(function() {     
  var scroll = $(window).scrollTop();     
  if (scroll > 100) { 
      $(".header").addClass("fixed"); 
  } 
  else {
  $(".header").removeClass("fixed"); 
  }
})

// scroll to top

function scrollTop() {
  if ($(window).scrollTop() > 200) {
    $(".scrool-to-top").addClass("active");
  } else {
    $(".scrool-to-top").removeClass("active");
  }
}
$(function () {
  scrollTop();
  $(window).on("scroll", scrollTop);

  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});