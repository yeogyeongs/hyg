/*감성메이커 json*/



$.ajax({

	url:"./json/mood.json",

	dataType: "json",

	success: function(data){


		if(data.length>0){

			for(var i in data){

				var title = data[i].title;
				var subtitle = data[i].subtitle;
				var url = data[i].url;

				$(".book_image").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 





				$(".mood").eq(i).append('<h3>'+data[i].title+"<h3>");      

					$(".book_image").eq(i).append('<p>'+data[i].subtitle+"</p>");                             



				}
			}


		}



	});


