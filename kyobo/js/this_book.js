/*이럴땐 이런책 title 배경색(수정필요)*/


$(function(){

	function(){


		var title_bg =['#5e6b9e', '#dfaa1d', ' #5f9943', '#59a1c2', ' #96649f', '#cb6b58'];
		var title=document.getElementsByClassName('this_title');


		for(var i=0; i<title_bg.length; i++){

			title[i].css("background-color","title_bg[i]");

		}
		
	}

	




	
});

