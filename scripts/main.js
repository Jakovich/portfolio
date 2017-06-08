$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > $('#intro').innerHeight()) {
      $('.main-header').addClass('main-header--dark');
      /*$( ".main-header" ).animate({
        backgroundColor: '#2B3037',
        color: '#ffffff'
      }, 300)*/
    } else {
      $('.main-header').removeClass('main-header--dark');
    }

  });
})
