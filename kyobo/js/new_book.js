

$(function(){


	/*마우스 오버시 장르 전환*/

	var new_item=document.getElementBtClass('new_book_section');

	$('.new_nav > li').mouseover(function(){


		new_item.index(i).stop().show();
		$(this).stop().hide();

	});





});