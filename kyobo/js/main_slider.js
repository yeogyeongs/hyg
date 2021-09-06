
/*메인 슬라이드*/

$(function(){


	/*이전 슬라이드*/


	var bg_color=["rgb(230, 233, 246)", "rgb(168, 218, 255)", "rgb(226, 242, 211)", "rgb(218, 236, 240)", "rgb(248, 244, 216)", "rgb(222, 243, 228)", "rgb(251, 234, 239)"];
	var i=0;

	function slide_prev(){

		i--;

		if(i>$('.slide_show li:last').index()){
			i=0;
		}

		$('.slide_show li').eq(i).stop().show();
		$('#slidewrap').css("background-color",bg_color[i]);

		$('.slide_show li').eq(i+1).stop().hide();

	}
	






	/*자동 슬라이드*/

	

	function auto_slide(){

		i++;

		if(i>$('.slide_show li:last').index()){
			i=0;
		}

		
		$('.slide_show li').eq(i).stop().show();
		$('#slidewrap').css("background-color",bg_color[i]);

		$('.slide_show li').eq(i-1).stop().hide();


	}
	setInterval(auto_slide,6000);




	$('.prev').click(function(){

		slide_prev();
	});



	$('.next').click(function(){

		auto_slide();
	});




	/*슬라이드 호버시 슬라이드 버튼 보임*/



	$(".slide_box1").mouseover(function(){

		$(".slide_box1 > span").stop().show();


	}).mouseout(function(){

		$(".slide_box1 > span").stop().hide();


	});




	



});














