
	function findIframe(){
		var rawData = (document.getElementsByTagName("iframe"));
		var iFramesOnPage = rawData.length;
		for (var i = 0; i < iFramesOnPage; i++) {
		if (rawData.item(i).src.includes("youtube")) {
			window.videoPupUp = "YouTube video detected"
			} 
		}
	};
    
	window.onload = findIframe();
