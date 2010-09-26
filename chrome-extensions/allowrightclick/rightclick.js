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
  void(document.oncontextmenu=null);
  void(document.body.oncontextmenu=null);
  removeContextOn("img");
  removeContextOn("td");
}

function removeContextOn(elt) {
  var elements=document.getElementsByTagName(elt);
  //for (var e in elements) {
  for (var i=0;i<elements.length;i++) {
    e=elements[i];
    void(e.oncontextmenu=null);    
  }
}
