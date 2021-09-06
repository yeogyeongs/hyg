/*기프트 best*/

$.ajax({


	url:"./json/gift.json",
	dataType:"json",

	success:function(data){


		if(data.length>0){

			for(var i in data){

				var url=data[i].url;
				var title=data[i].title;
				var price=data[i].price;
				var percent=data[i].percent;





				$(".gift_list > li > a").eq(i).append("<img src='img/"+data[i].url+"'/>");
				$(".gift_list > li > a").eq(i).append("<h3>"+data[i].title+"'</h3>");
				$(".gift_list > li > a").eq(i).append("<p>"+data[i].price+"</p>");
				$(".gift_list > li > a > p").eq(i).append("<span>"+data[i].percent+"</span>");
				
			}
			


		}


	}







});