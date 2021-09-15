/*타이핑 효과*/

$(function(){

	const content = "Developer / Front end / Javascript";
	const text = document.querySelector(".title");
	let i = 0;


	function typing(){
		let txt = content[i++];
		text.innerHTML += txt=== "\n" ? "<br/>": txt;
		if (i > content.length) {
			text.textContent = "";
			i = 0;
		}
	}
	setInterval(typing, 200)



});
