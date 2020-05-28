$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "13px",
        readOnly: true
      });

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        grid: true,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
      $('.product__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active');
    });

    $('.icon-th-large').on('click', function(){
      $('.product__item').removeClass('list');
      $('.icon-th-large').addClass('active');
      $('.icon-th-list').removeClass('active');
    });

    $('.product__slider-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
      });
     
      $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
      });
      
      $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
      });

      $('.produck-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.produck-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.produck-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
        });
        
      var mixer = mixitup('.products__inner-box');
    
});