$(function(){
  

  $('.header-slider').slick({
   dots:true,
   vertical: true,
   prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
   nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',  
   responsive: [
     {

      breakpoint: 371,
      settings: {
      dots:false,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 2000,
     }
    }
    
   ]  
  });

  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1, 
    vertical: true,   
    focusOnSelect: true,     
    asNavFor: '.product__content',
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="next"></button>',   
    responsive: [
      { 
       breakpoint: 891,
       settings: { 
       slidesToShow:3,      
       arrows:false,       
       vertical: false, 
       dots:true,
      },
      breakpoint: 461,
       settings: { 
       slidesToShow:1,      
       arrows:false, 
       vertical: false, 
       dots:true,
     } 
    }     
    ]   
    
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    // fade: true,
    arrows: false,    
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });
  

});