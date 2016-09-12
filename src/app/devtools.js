
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