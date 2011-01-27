if (!document.domain.match("google|yahoo")) {
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
  
  miscHacks();
}

function removeContextOnAll(eltName) {
  var elements=document.getElementsByTagName(eltName);
  //for (var e in elements) {
  for (var i=0;i<elements.length;i++) {
    removeContextMenuOn(elements[i]);
  }
}

function removeContextMenuOn(elt) {
	// I don't think this is still usefull
    void(elt.oncontextmenu=null);
    //more general than elt.oncontextmenu	
    elt.addEventListener("contextmenu", bringBackDefault, false);
}
//reduces memory footprint with a single named function
function bringBackDefault(event) {
	event.returnValue = true;	
}

function miscHacks() {
	// see flickr.css
	if (document.domain.match("youtube")) {youtubeHack();}
}

/* Youtube oncontextmenu is anonymous and cannot be removed with the previous technique.
 * The workaround is to clone the node.
 * This hack comes from http://mortalpowers.com/news/youtube-freedom-version-3 
 */
function youtubeHack() {
		videoContent = document.getElementsByClassName('video-content')[0];	
		p = videoContent.parentElement;
		// cloning a node does not copy the event handlers
		cleanVideoContent = videoContent.cloneNode(true);
		p.replaceChild(cleanVideoContent,videoContent);
}