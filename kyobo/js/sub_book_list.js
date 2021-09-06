/*왼쪽 북리스트*/

$.ajax({

	method:"GET",
	url:"https://dapi.kakao.com/v3/search/book?target=title",
	data:{query:"밤"},
	headers:{Authorization:"KakaoAK f993f7c41ef0998b0d68923a7eaedb6b"}

})
.done(function(msg){




	var divs = document.getElementsByTagName('div');

	for(var i=0; i<divs.length; i++){

		$(".lbox1 > li").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
		$(".lbox1 > li").eq(i).append("<h3><a href='#'>"+msg.documents[i].title+"</a></h3>");
		$(".lbox1 > li").eq(i).append("<p>"+msg.documents[i].authors+"</p>");
		$(".lbox1 > li").eq(i).append("<h6>"+msg.documents[i].sale_price+"</h6>");


	}


});