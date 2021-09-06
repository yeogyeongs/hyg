

$(function(){


	/*메인 네비게이션 호버시*/

	$('.main_menu > li ').mouseover(function(){

		$(this).find(".main_s_menu").stop().show();
		

	}).mouseout(function(){
		$(".main_s_menu").stop().hide();

	});


	


	/*슬라이더 배경색 / 이미지 변경*/

	var bg_color=["rgb(230, 233, 246)", "rgb(168, 218, 255)", "rgb(226, 242, 211)", "rgb(218, 236, 240)", "rgb(248, 244, 216)", "rgb(222, 243, 228)", "rgb(251, 234, 239)"];

	var slide_box=$('.slide_show > li ');



	$('.slide_box1 > .slide_nav > li').mouseover(function(){

		$('#slidewrap').css("background-color",bg_color[$(this).index()]);
		slide_box.stop().hide();
		slide_box.eq($(this).index()).stop().show();

		$('.slide_box1 > .slide_nav > li').removeClass('s_nav');
		$(this).addClass('s_nav');


	}).mouseout(function(){
		$('.slide_box1 > .slide_nav > li').removeClass('s_nav');
		$(this).addClass('s_nav');


	});







});