//Write JS logic here

$(document).on('ready',function(){
  $('.hamburger-button').on('click',function(){
    $('.mobile-navbar').css('display','block');
  })
  $('.nav-close-button').on('click',function(){
    $('.mobile-navbar').css('display','none');
  })
})
