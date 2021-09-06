
/*오직 교보 json*/


			$.ajax({

				url:"./json/only_k.json",

				dataType: "json",

				success: function(data){


					if(data.length>0){

						for(var i in data){							
							
							var url = data[i].url;

							$(".only > li").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 


						}

					}


				}



			});

