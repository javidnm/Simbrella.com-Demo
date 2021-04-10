$(document).ready(function () {
  const primaryColor='#2D3192';
  const hamburgerButton=$(".hamburger");
  const header=$('.header');
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(".header").addClass("active");
      $(".hamburger").removeClass("header__hamburger");
      $(".hamburger").addClass("header__hamburger--scroll");
    } else {
      $(".header").removeClass("active");
      $(".hamburger").addClass("header__hamburger");
      $(".hamburger").removeClass("header__hamburger--scroll");
    }

    if (window.scrollY >= $('#secondSection').offset().top && window.scrollY < $('#thirdSection').offset().top) {
      $(".second").addClass("active");
    } else {
      $(".second").removeClass("active");
    }
    if (window.scrollY >= $('#fourthSection').offset().top && window.scrollY < $('#map').offset().top) {
      $(".fourth").addClass("active");
      $('.countfect').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-count');

        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 3000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          });
      });
    } else {
      $(".fourth").removeClass("active");
    }
    if (window.scrollY >= $('#news').offset().top && window.scrollY < $('#footer').offset().top) {
      $(".news").addClass("active");
    } else {
      $(".news").removeClass("active");
    }
  });
  document.querySelectorAll('.cities').forEach(function (value, index) {
    value.addEventListener('click', function () {
      const activeButton = $('button.active');
      const activeInfo = $('div.d-block');
      activeButton.removeClass('active');
      value.classList.add('active');
      activeInfo.removeClass('d-block');
      activeInfo.addClass('d-none');
      document.querySelector('.info-according-city').children[index].classList.remove('d-none');
      document.querySelector('.info-according-city').children[index].classList.add('d-block');
      
    })
  })
  AOS.init();
  hamburgerButton.click(function(){
    if(hamburgerButton.hasClass('header__hamburger--active')==false){
        hamburgerButton.toggleClass('header__hamburger--active');
        hamburgerButton.removeClass('header__hamburger--close');
        $('.after-click').toggleClass('d-block');
        if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--active')==true){
            $('body').css('overflow','hidden');
            header.addClass("blueColor");
            header.css('transition','0s');
        }else if(window.scrollY>=100){
            $('body').css('overflow','hidden');
            header.css('background-color','white');
            header.css('transition','.5s');
        }else if(hamburgerButton.hasClass('header__hamburger--active')==false){
            header.css('background-color','rgba(0,0,0,0)');
            header.css('transition','.5s');
            }
    }else{
        hamburgerButton.toggleClass('header__hamburger--close');
        hamburgerButton.removeClass('header__hamburger--active');
        $('.after-click').toggleClass('d-block');
        
        if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--close')==true){
            $('body').css('overflow','auto');
            header.removeClass("blueColor");
            header.css('transition','0s');
        }else if(window.scrollY>=100){
            $('body').css('overflow','auto');
            header.css('background-color','white');
            header.css('transition','.5s');
        }else if(hamburgerButton.hasClass('header__hamburger--close')==false){
            header.css('background-color',primaryColor);
            header.css('transition','.5s');
        }
    }
})
$('.customized-list-group__items a').click(function(){
  hamburgerButton.toggleClass('header__hamburger--active');
  hamburgerButton.toggleClass('header__hamburger--close');
  header.removeClass("blueColor");
  $('.after-click').toggleClass('d-block');
  $('body').css('overflow','auto');
})


});