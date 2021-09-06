
/*오늘의 책*/

$(function(){



	/*오늘의 책 네비 호버시 장르전환*/


	$(".today_nav > li").mouseover(function(){
		$(".today_box1").stop().hide();
		$(".today_box1").eq($(this).index()).stop().show();


	});





	/*오늘의 책 카드뉴스 이미지 출력*/


//이미지 배열 


var bookarr_1=["01_1.jpg","01_2.jpg","01_3.jpg","01_4.jpg","01_5.jpg","01_6.jpg","01_7.jpg","01_8.jpg","01_9.jpg","01_10.jpg","01_11.jpg","01_12.jpg","01_13.jpg","01_14.jpg","01_15.jpg","01_16.jpg","01_17.jpg","01_18.jpg","01_19.jpg","01_20.jpg"];

var bookarr_2=["02_1.jpg","02_2.jpg","02_3.jpg","02_4.jpg","02_5.jpg","02_6.jpg","02_7.jpg","02_8.jpg","02_9.jpg","02_10.jpg","02_11.jpg","02_12.jpg"];

var bookarr_3=["03_1.jpg","03_2.jpg","03_3.jpg","03_4.jpg","03_5.jpg","03_6.jpg","03_7.jpg","03_8.jpg","03_9.jpg","03_10.jpg"];

//국내도서 카드뉴스1 이미지 넣기

for(var i=0; i<bookarr_1.length; i++){

	$(".t_page01-1").append('<img src="'+"img/today/"+bookarr_1[i]+'">');



} 


//국내도서 카드뉴스2 이미지 넣기

for(var i=0; i<bookarr_2.length; i++){

	$(".t_page01-2").append('<img src="'+"img/today/"+bookarr_2[i]+'">');



} 


//국내도서 카드뉴스3 이미지 넣기

for(var i=0; i<bookarr_3.length; i++){

	$(".t_page01-3").append('<img src="'+"img/today/"+bookarr_3[i]+'">');



} 



/* 동그라미 네비 클릭시 카드뉴스 변함 하나만 되고 그후 뒤에것이 보이지 않음 */

$('.pages > div').click(function(){   /*동그라미 네비 클릭시*/
 
	$('.tbox1_2').stop().hide();    // 카드뉴스 숨김
	$('.tbox1_2').eq($(this).index()).stop().show();



});









/*화제의 책 네비 호버시 장르전환*/


$(".new_nav > li").mouseover(function(){
	$(".new_book_section").stop().hide();
	$(".new_book_section").eq($(this).index()).stop().show();


});












});




