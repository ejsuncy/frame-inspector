import {Component} from '@angular/core';
declare let chrome; //our extension will have access to this in the chrome browser

@Component({
    selector: 'frame-inspector',
    templateUrl: 'html/devtools_panel.html'
})
export class AppComponent {
    // devtools panel creation parameters
    private panelTitle : string = "FrameInspector";
    private panelPNGPath: string = "";
    private panelHTMLPath: string = "/html/devtools_panel.html";

    // devtools panel vars
    private framesDiv: Element;

    constructor() {
        chrome.devtools.panels.create(this.panelTitle,
            this.panelPNGPath,
            this.panelHTMLPath,
            function (panel) {
                panel.onShown.addListener(this.devtoolPanelOnShownListener);
            }
        );
    }

    // entry point once our panel has been loaded
    private devtoolPanelOnShownListener (extPanelWindow) {
        // var regex = localStorage.getItem('regex');
        extPanelWindow.setTimeout(function () {
            this.appendRow(extPanelWindow, 0);
        }, 1000);
    }

    private appendRow (extPanelWindow, text){
        var contentNode = extPanelWindow.document.getElementById('frames');
        var node = extPanelWindow.document.createElement("div");
        node.appendChild(document.createTextNode(text));

        var atBottom = contentNode.scrollHeight - contentNode.scrollTop === contentNode.clientHeight;

        contentNode.appendChild(node);
        if (atBottom)
            node.scrollIntoView();

        extPanelWindow.setTimeout(function(){
            this.appendRow(extPanelWindow, text + 1);
        }, 500);
    }

}

