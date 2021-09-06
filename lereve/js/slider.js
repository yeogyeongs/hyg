$(function(){



	function prev(){

		
		$(".slider_wrap li:last").prependTo(".slider_wrap");
		$(".slider_wrap").css({marginLeft:-1920});
		$(".slider_wrap").stop().animate({marginLeft:0},800);


	}




	function next(){

		$(".slider_wrap").stop().animate({marginLeft:-1920},function(){
			$(".slider_wrap li:first").appendTo(".slider_wrap");
			$(".slider_wrap").css({marginLeft:0});


		});

	}




	function slide(){

		$(".slider_wrap").stop().animate({marginLeft:-1920},function(){
			$(".slider_wrap li:first").appendTo(".slider_wrap");
			$(".slider_wrap").css({marginLeft:0});


		});

	}

	setInterval(slide,5000);



	$('.prev').click(function(){

		prev();

	});



	$('.next').click(function(){

		next();

	});



});