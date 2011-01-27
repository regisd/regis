var whitelist = localStorage["whitelist"];
if (!whitelist) {
    whitelist="google|yahoo";
  }
if (!document.domain.match(whitelist)) {
  //deactivate the extension on these sites (saves Yahoo! mail, etc)
  var timer = window.setInterval(function() {
            if (/loaded|complete/.test(document.readyState)){
                window.clearInterval(timer);
                enableContextMenu();
            }
          }, 30);
}

function enableContextMenu() {
  console.log("allow right click on "+window.location);
  void(document.ondragstart=null);
  void(document.onselectstart=null);
  void(document.onclick=null);
  void(document.onmousedown=null);
  void(document.onmouseup=null);
  void(document.body.oncontextmenu=null);
  removeContextMenuOn(document);
  removeContextOnAll("img");
  removeContextOnAll("td");
  removeContextOnAll("div");
  //miscHacks();
}

function removeContextOnAll(eltName) {
  var elements=document.getElementsByTagName(eltName);
  //for (var e in elements) {
  for (var i=0;i<elements.length;i++) {
    removeContextMenuOn(elements[i]);
  }
}

function removeContextMenuOn(elt) {
	//hope I won't break the extension anywhere
	//void(elt.oncontextmenu=null);
    //more general than elt.oncontextmenu	
    elt.addEventListener("contextmenu", bringBackDefault, false);
}
//reduces memory footprint with a single named function
function bringBackDefault(event) {
	event.returnValue = true;	
}

function miscHacks() {
	// see flickr.css
	// Cannot read the localStorage in this context. Need to send a message to the background page.
	if (document.domain.match("youtube")) {
		chrome.extension.sendRequest({method: "optionhackYoutube"}, function(response) {
			if(response.value)
				youtubeHack();
		});
	}
}