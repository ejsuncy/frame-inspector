function appendRow (extPanelWindow, text){
    var contentNode = extPanelWindow.document.getElementById('frames');
    var node = extPanelWindow.document.createElement("div");
    node.appendChild(document.createTextNode(text));

    var atBottom = contentNode.scrollHeight - contentNode.scrollTop === contentNode.clientHeight;

    contentNode.appendChild(node);
    if (atBottom)
        node.scrollIntoView();

    extPanelWindow.setTimeout(function(){
        appendRow(extPanelWindow, text + 1);
    }, 500);
}

chrome.devtools.panels.create("FrameInspector",
    "",
    "/html/devtools_panel.html",
    function(panel){
        panel.onShown.addListener(function (extPanelWindow) {
            // var regex = localStorage.getItem('regex');
            extPanelWindow.setTimeout(function(){
                appendRow(extPanelWindow, 0);
            }, 1000);
        });
    }
);