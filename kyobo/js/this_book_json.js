/*이럴 땐 이런 책*/


$.ajax({

	url:"./json/this_book.json",

	dataType: "json",

	success: function(data){


		if(data.length>0){

			for(var i in data){							

				var url = data[i].url;
				var title = data[i].title;
				var subtitle = data[i].subtitle;
				var tag1= data[i].tag1;
				var tag2= data[i].tag2;
				var list1=data[i].list1;
				var list2=data[i].list2;
				var list3=data[i].list3;
				var list4=data[i].list4;
				

				$(".title").eq(i).append("<h3>"+data[i].title+"</h3>");


				$(".tag1").eq(i).append(data[i].tag1);
				$(".tag2").eq(i).append(data[i].tag2);
				
				

				$(".top").eq(i).append("<img src='img/"+data[i].url+"'/>"); 
				$(".top").eq(i).append("<h3>"+data[i].subtitle+"</h3>"); 

				$(".list1").eq(i).append(data[i].list1);
				$(".list2").eq(i).append(data[i].list2);
				$(".list3").eq(i).append(data[i].list3);
				$(".list4").eq(i).append(data[i].list4);
				





			}

		}


	}



});

