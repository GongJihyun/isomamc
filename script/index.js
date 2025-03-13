$(function(){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
      });
  
  
      //  스크롤시 헤더 고정
      $(function () {
        $(document).ready(function () {
  
          var scrollOffset = $('.header').offset();
  
          $(window).scroll(function () {
            if ($(document).scrollTop() > scrollOffset.top) {
              $('.header').addClass('scroll-fixed');
            }
            else {
              $('.header').removeClass('scroll-fixed');
            }
          });
        });
      });
  
      // contents1 움직이는 숫자
      $(function () {
        var executed1 = false;
        var executed2 = false;
        var executed3 = false;
        var executed4 = false;
  
        $('.list').waypoint(function () {
          var targetNumber = $('.animate1').attr('data-rate');
          if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate1').animateNumber({
              number: targetNumber,
              numberStep: comma_separator_number_step
            }, 1500);
            executed1 = true;
          }
        },
          {
            offset: '80%'
          }
        );
  
  
        $('.list').waypoint(function () {
          var targetNumber = $('.animate2').attr('data-rate');
          if (!executed2) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate2').animateNumber({
              number: targetNumber,
              numberStep: comma_separator_number_step
            }, 1500);
            executed2 = true;
          }
        },
          {
            offset: '80%'
          }
        );
  
        $('.list').waypoint(function () {
          var targetNumber = $('.animate3').attr('data-rate');
          if (!executed3) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate3').animateNumber({
              number: targetNumber,
              numberStep: comma_separator_number_step
            }, 1500);
            executed3 = true;
          }
        },
          {
            offset: '80%'
          }
        );
  
        $('.list').waypoint(function () {
          var targetNumber = $('.animate4').attr('data-rate');
          if (!executed4) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate4').animateNumber({
              number: targetNumber,
              numberStep: comma_separator_number_step
            }, 1500);
            executed4 = true;
          }
        },
          {
            offset: '80%'
          }
        );
      });
  
      // 흘러가는 글자
      (function ($) {
        $(function () { //on DOM ready 
          $(".slide1").simplyScroll({
            customClass: 's1'
          });
  
        });
      })(jQuery);
  
      // contents3 슬라이드
      var swiper2 = new Swiper(".c3", {
        slidesPerView: 3.2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".contents3_in .textbox .swiper-button-next",
          prevEl: ".contents3_in .textbox .swiper-button-prev",
        }
      });
  
      // contents5 AOS 
      AOS.init({
        duration: 1000,
        once: true,
        offset: -300,
      });
      
    //   슬라이드 배너
      var swiper3 = new Swiper(".c6", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        
        
      });
});