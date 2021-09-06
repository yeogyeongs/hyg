/*화제의 신간*/



/*국내*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"밤"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".section_ibox1 > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".section_ibox1 > li").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");


		var str= msg.documents[i].contents;
		var str2=str.substring(0,51);

		$('.section_ibox1 > li').eq(i).append("<p>"+str2+"</p>");

	}



});



/*외국*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"reboot"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".section_ibox2 > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".section_ibox2 > li").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");


		var str= msg.documents[i].contents;
		var str2=str.substring(0,51);

		$('.section_ibox2 > li').eq(i).append("<p>"+str2+"</p>");

	}



});



/*이북*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"시간"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".section_ibox3 > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".section_ibox3 > li").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");


		var str= msg.documents[i].contents;
		var str2=str.substring(0,51);

		$('.section_ibox3 > li').eq(i).append("<p>"+str2+"</p>");

	}



});



/*sam*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"말"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".section_ibox4 > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".section_ibox4 > li").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");


		var str= msg.documents[i].contents;
		var str2=str.substring(0,51);

		$('.section_ibox4 > li').eq(i).append("<p>"+str2+"</p>");

	}



});





/*음반*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"노래"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){



	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".section_ibox5 > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".section_ibox5 > li").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");


		var str= msg.documents[i].contents;
		var str2=str.substring(0,51);

		$('.section_ibox5 > li').eq(i).append("<p>"+str2+"</p>");

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
		$(".pick_book").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".pick_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
		$(".pick_book").eq(i).append("<span>"+"정가 "+msg.documents[i].price+"원"+"</span>");
		$(".pick_book").eq(i).append("<p>"+"판매가 "+msg.documents[i].sale_price+"원"+"</p>");

	}


});






/* 이주의 책*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"비밀"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$('.this_book').eq(i).append("<div class='image_box'><img src='"+msg.documents[i].thumbnail+"'/></div>");
		$('.this_book').eq(i).append("<h3><strong>"+msg.documents[i].title+"</strong></h3>");
		$(".this_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
		$(".this_book").eq(i).append("<p>"+msg.documents[i].sale_price+"원"+"</p>");


	}




});







/*실시간 추천*/



$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"우리가 빛의"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".c_list").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".c_list").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
		$(".c_list").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

	}


});








/*평점 좋은 책*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"여름"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".cbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".cbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
		$(".cbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

	}


});

