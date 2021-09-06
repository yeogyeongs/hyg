
	<!--메모장으로 내용 가져오기-->


		$(function () {



			$.get("./js/item.txt", function (data) {

				$(".item_text").html(data);


			})



		});

