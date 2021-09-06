/*화제의 신간*/

		$.ajax({

			method:"GET",
			url:"https://dapi.kakao.com/v3/search/book?target=title",
			data:{query:"밤"},
			headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

		})
		.done(function(msg){







			var divs = document.getElementsByTagName('div');

			for(var i=0; i<divs.length; i++){

				$(".new_book").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
				$(".new_book").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");


			}


		});




		/*Pick 추천 샘플*/

		$.ajax({

			method:"GET",
			url:"https://dapi.kakao.com/v3/search/book?target=title",
			data:{query:"에세이"},
			headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

		})
		.done(function(msg){







			var divs = document.getElementsByTagName('div');

			for(var i=0; i<divs.length; i++){

				$(".pick_book").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
				$(".pick_book").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
				$(".pick_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

			}


		});






