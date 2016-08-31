chrome.devtools.panels.create("FrameInspector",
    "",
    "/html/devtools_panel.html",
    function(panel){
        panel.onShown.addListener(function (extPanelWindow) {
            extPanelWindow.document.getElementById('content').innerText = "But *this* text was set from the devtools.js script!";
        });
    }
);