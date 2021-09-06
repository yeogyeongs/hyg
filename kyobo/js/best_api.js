/*베스트셀러*/

/*종합*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"소설"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book1").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


	}


});





/*일간*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"일"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book2").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book2").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book2").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

	}


});








/*외국도서*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"a"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book3").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book3").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

	}


});








/*eBook*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"땅"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book4").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book4").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book4").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
	}


});








/*오디오북*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"삼"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book5").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book5").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book5").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
	}


});











/*sam*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"부"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book6").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book6").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book6").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

	}


});








/*기프트*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"1"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".best_book7").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".best_book7").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".best_book7").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
	}


});








/*추천 이북1*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"이"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".b_book1").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".b_book1").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");

	}


});







/*추천 이북1*/
$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"픽션"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".b_book2").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".b_book2").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");

	}


});











