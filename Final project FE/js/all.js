$(document).ready(function () {

    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
      }
    })
    
});