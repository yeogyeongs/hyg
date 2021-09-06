/*베스트셀러*/


$(function(){
	
	/*베스트셀러 네비 호버시*/

	$('.best_nav li').mouseover(function(){

		$('.bbox1').stop().hide();
		$('.bbox1').eq($(this).index()).stop().show();

	});




	/*베스트셀러 사이드 네비 호버시*/

	$('.best_side li').mouseover(function(){

		$('.bside').stop().hide();
		$('.bside').eq($(this).index()).stop().show();


	});


	/*베스트셀러 사이드 버튼 클릭시*/









});