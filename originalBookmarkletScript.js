function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function getLinks() {
	var linkCollection = document.getElementsByClassName("actionLink");

	for(let i=0; i<linkCollection.length; i++) {
		if(linkCollection[i].tagName == "a" || linkCollection[i].tagName == "A") {
			var currentLinkHref = linkCollection[i].getAttribute("href");
			urlList.push(currentLinkHref);
		}
	}
}

function main() {
	urlList = [];
	console.log("Starting main()");
	
	getLinks();

	console.log("urlList length = " + urlList.length.toString());
	if (urlList.length > 0) {
		if(confirm("You are about to open " + urlList.length.toString() + " links. Confirm?")) {
			for (let linkIndex = 0; linkIndex<urlList.length; linkIndex++) {
				console.log("attempting to open " + urlList[linkIndex]);
				openInNewTab(urlList[linkIndex]);
			}
		}
	}
}

var urlList = [];
main();