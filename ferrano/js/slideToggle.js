
		$(document).ready(function(){

			$("i").click(function(){
				$(".b").slideToggle();
			});

		});

		$(window).resize(function(){

			if(window.innerWidth >=599){

				$(".b").show();

			}

		});


