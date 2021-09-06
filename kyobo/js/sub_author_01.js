/*매트 헤이그의 다른 작품 json*/



$.ajax({

	url:"./json/author_01.json",

	dataType: "json",

	success: function(data){


		if(data.length>0){

			for(var i in data){

				var title = data[i].title;
				var price = data[i].price;
				var url = data[i].url;

				$(".author_01 > li").eq(i).append( "<img src='img/"+data[i].url+"'/>"); 





				$(".author_01 > li").eq(i).append('<h3>'+data[i].title+"</h3>");      

				$(".author_01 > li").eq(i).append('<p>'+data[i].price+"</p>");                             



			}
		}


	}



});