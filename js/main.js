
$(document).ready(function(){
  
$('.testimonial-active').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     dots: true,
     autoplay: true,
     arrows: false,
     autoplaySpeed: 2000,
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
   });
});
             