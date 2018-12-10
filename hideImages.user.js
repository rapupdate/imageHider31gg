//==UserScript==
//@name         Hide Images
//@namespace    http://tampermonkey.net/
//@version      0.3
//@description  Make RU great Again
//@author       You
//@match        https://disqus.com/embed/comments/*
//@require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
//@run-at       document-start
//==/UserScript==
(function() {
	setInterval(function(){
		console.log("Test Injection")
		removeImages()
	},500)

})();
function removeImages(){
	if($(".media-content-placeholder").not(".hidden").length){
		//$(".media-content-placeholder").find("img").remove();
		$(".media-content-placeholder").not(".hidden").wrap("<details class='imageHider'></div>" );
		var summary = document.createElement("summary")
		summary.innerHTML = "Bild anzeigen";
		$(".imageHider").not(".summary").prepend(summary);
		$(".imageHider").addClass("summary");
		$(".media-content-placeholder").not(".hidden").addClass("hidden");
	}
}
