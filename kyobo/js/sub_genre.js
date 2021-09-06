/*서브페이지 장르 호버*/

$(function(){





	$('.main_genre > li').mouseover(function(){

		$(this).find('.sub_genre').stop().show();

	}.mouseout(function(){

		$('.sub_genre').stop().hide();

	});



});
