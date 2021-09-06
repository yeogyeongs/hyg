/*hot item 슬라이더 */



$(function(){




	function hot_slide_prev(){


		$('.hslide > li:last').prependTo('.hslide');

		$('.hslide').css({marginLeft:-834});

		$('.hslide').stop().animate({marginLeft:0});

	}







	function hot_slide_next(){

		$('.hslide').stop().animate({marginLeft:-834}, function(){

			$('.hslide > li:first').appendTo('.hslide');

			$('.hslide').css({marginLeft:0});

		});

	}






	function hot_slide(){

		$('.hslide').stop().animate({marginLeft:-834}, function(){

			$('.hslide > li:first').appendTo('.hslide');

			$('.hslide').css({marginLeft:0});

		});

	}

	setInterval(hot_slide,6000);



	$('.prev_button').click(function(){

		hot_slide_prev();
	});


	$('.next_button').click(function(){

		hot_slide_next();
	});




});
