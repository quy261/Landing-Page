$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false,
  center:true,
  autoplay:true,
  responsiveClass:true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})
});