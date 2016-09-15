import {Component} from '@angular/core';
declare let chrome; //our extension will have access to this in the chrome browser

/*
    The purpose of this app is to create a dev tools panel in chrome.
 */

@Component({
    selector: 'frame-inspector',
    templateUrl: './app.component.html'
})
export class AppComponent {
    // devtools panel creation parameters
    private panelTitle : string = "FrameInspector";
    private panelPNGPath: string = "";
    private panelHTMLPath: string = "/app_devtools_panel/index.html";

    constructor() {
        chrome.devtools.panels.create(this.panelTitle,
            this.panelPNGPath,
            this.panelHTMLPath,
            function (panel) {
                // panel.onShown.addListener(this.devtoolPanelOnShownListener);
            }
        );
    }

    private appendRow (extPanelWindow, text){

        // var atBottom = contentNode.scrollHeight - contentNode.scrollTop === contentNode.clientHeight;

    }

}

