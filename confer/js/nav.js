/*네비 토글*/

$(function(){

 $('.main_menu > li').mouseover(function(){

  $(this).children('.sub_menu').stop().slideDown();

}).mouseout(function(){

  $('.sub_menu').stop().slideUp();

});



});




/*media 590px 오픈네비*/


function openNav() {
  document.getElementById("myNav").style.width = "42%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



