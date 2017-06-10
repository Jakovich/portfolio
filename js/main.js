$(document).ready(function(){
  var mainHeader = $('.main-header');
  $(window).scroll(function(){
    //$(this).scrollTop() > $('#intro').innerHeight() - 60 ? mainHeader.addClass('main-header--dark', 'fast') :  mainHeader.removeClass('main-header--dark', 'fast');
    checkHeight();
  });
  checkHeight();
  function checkHeight() {
    $(this).scrollTop() > $('#intro').innerHeight() - 60 ? mainHeader.addClass('main-header--dark', 'fast') :  mainHeader.removeClass('main-header--dark', 'fast');
  }
  $('.navbar-nav a[href^="#"]').click(function () {
     var elementClick = $(this).attr("href");
     var destination = $(elementClick).offset().top - 80;
       $('html').animate( { scrollTop: destination }, 1100 );
       $('body').animate( { scrollTop: destination }, 1100 );
   });

})
