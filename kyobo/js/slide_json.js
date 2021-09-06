		/*슬라이더1 이미지 json*/

		$.ajax({

			url:"./json/slider.json",

			dataType: "json",

			success: function(data){


				if(data.length>0){

					for(var i in data){

						var title = data[i].title;
						var text = data[i].text;
						var url = data[i].url;

						$(".imgbox_s").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 





						$(".imgbox_s").eq(i).append('<h3>'+data[i].title+"<h3>");      

						$(".imgbox_s").eq(i).append('<p>'+data[i].text+"</p>");                             



					}
				}


			}



		});





