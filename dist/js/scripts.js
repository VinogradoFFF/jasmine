window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let more = document.querySelector('.btncons'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  more.addEventListener('click', function() {
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function() {
  overlay.style.display = 'none';
  document.body.style.overflow = '';
  });

(function($) {
    
    $('.service-caro').owlCarousel({
        dots: true,
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            1180:{
              items:3
            }
        }
    });

    $('.test-caro').owlCarousel({
        autoplay:true,
        dots: true,
        loop:true,
        nav:false,
        items: 1
    });

    $('.mobile-menu').on('click', function() {
        $('.primary-menu ul').slideToggle();
    });

}) (jQuery);  

});



