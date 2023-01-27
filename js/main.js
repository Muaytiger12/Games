$('.slider').slick({
 infinite: true,
 slidesToShow: 13,
 slidesToScroll: 3,
 arrows:true,
 appendArrows: $('.we__arrows'),
 prevArrow: $('.we__arrows-prev'),
 nextArrow: $('.we__arrows-next'),
 waitForAnimate: false,
 dots:true,
 appendDots: $('.we__dots'),
 responsive: [
  {
 breakpoint: 900,
settings: {
   slidesToShow:5,
   slidesToScroll: 3,
   dots: false,
   }
  },
  {
    breakpoint:580,
    settings:{
      slidesToShow:3,
    }
  },
{
  breakpoint: 500,
  settings:{
    slidesToShow:2,
    slidesToScroll:2,
  }
},
{
  breakpoint:320,
  settings:{
    slidesToShow:1
  }
}
]
})


$('.burger').on('click', function(e) {
 e.preventDefault()
 $('.header__nav-item').toggleClass('open'),
  $('.overlay').toggleClass('overlay--show')
})
