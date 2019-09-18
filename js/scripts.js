//-------------------Слайдеры с главной---------------------
$(document).ready(function(){
  $('.head-slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 2000,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 414,
      settings: {
        dots: false
      }
    }
    ]
});
});
$(document).ready(function(){
  $('.arrivals-slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 4,
  infinite: true,
  speed: 600,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1140,
      settings: {
        dots: true,
        arrows: false
      }
    },
    {
    breakpoint: 1035,
    settings: {
      slidesToShow: 3,
      dots: true,
      arrows: false
      }
    },
    {
    breakpoint: 790,
    settings: {
      slidesToShow: 2,
      dots: true,
      arrows: false
      }
    },
    {
    breakpoint: 540,
    settings: {
      slidesToShow: 1,
      dots: true,
      arrows: false
      }
    }
  ]
});
});
//------------------Слайдеры со страницы товара---------------
$(document).ready(function(){
  $('.product-slider').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  infinite: true,
  speed: 600,
  cssEase: 'linear'
});
});
$(document).ready(function(){
  $('.related-slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 3,
  infinite: true,
  speed: 600,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 645,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
});

