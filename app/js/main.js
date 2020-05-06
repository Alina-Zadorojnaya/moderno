$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "13px",
        readOnly: true
      });


    var mixer = mixitup('.products__inner-box');

    $('.product__slider-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
        

      });
    
});