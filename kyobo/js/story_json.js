/*스토리 json*/

	

			$.ajax({

				url:"./json/story.json",

				dataType: "json",

				success: function(data){


					if(data.length>0){

						for(var i in data){							
							
							var title = data[i].title;
							var text = data[i].text;
							var subtitle = data[i].subtitle;
							var url = data[i].url;

							$(".imgbox1").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
							$(".imgbox1").eq(i).append( '<h4>'+data[i].subtitle+'</h4>'); 

							$(".box2").eq(i).append( '<h3><a href="#">'+data[i].title+'</a><h3>');
							$(".box2").eq(i).append( '<p>'+data[i].text+'</p>');


						}

					}


				}



			});


