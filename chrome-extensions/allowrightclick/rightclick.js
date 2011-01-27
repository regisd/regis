// if (document.addEventListener)
//   document.addEventListener("DOMContentLoaded", walkmydog, false)

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
}

function removeContextOnAll(eltName) {
  var elements=document.getElementsByTagName(eltName);
  //for (var e in elements) {
  for (var i=0;i<elements.length;i++) {
    removeContextMenuOn(elements[i]);
  }
}

function removeContextMenuOn(elt) {
    void(elt.oncontextmenu=null);
    elt.addEventListener("contextmenu", function(event) {event.returnValue = true;}, false);
}