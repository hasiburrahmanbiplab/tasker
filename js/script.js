
$('.testimonial-slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    infinite: true,
    dots:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
