/*네비 토글*/

$(function(){

 $('.main_menu > li').mouseover(function(){

  $(this).children('.sub_menu').stop().slideDown();

}).mouseout(function(){

  $('.sub_menu').stop().slideUp();

});

});
