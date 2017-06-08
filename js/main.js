$(document).ready(function(){
  var mainHeader = $('.main-header');
  $(window).scroll(function(){
    $(this).scrollTop() > $('#intro').innerHeight() ? mainHeader.addClass('main-header--dark', 'fast') :  mainHeader.removeClass('main-header--dark', 'fast');

  });
})
