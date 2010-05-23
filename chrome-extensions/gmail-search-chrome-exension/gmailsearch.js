function getDefinition(info, tab) {
 if (!info.selectionText || info.selectionText.length == 0) {
   return;
 }
 var maxLength = 1024;
 var searchText = (info.selectionText.length <= maxLength) ?
                  info.selectionText : info.selectionText.substr(0, maxLength);
 var url = "http://www.google.com/search?q=define:" + escape(searchText);
 chrome.tabs.create({"url": url});
}


chrome.experimental.contextMenu.create({"title": "Define '%s'", 
		"onclick": getDefinition,
        "contexts":["SELECTION"]});