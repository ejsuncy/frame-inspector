import {Component} from '@angular/core';

@Component({
    selector: 'frame-inspector-popup',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private inputText: string;
    private regex: string;
    private outputText: string;

    constructor(){
        this.initFields();
    }

    private static replace(input, regex) {
        if (!input || !regex) return null;

        var regexp = new RegExp(regex, 'g');
        return input.replace(regexp, "");
    }

    private saveInput() {
        localStorage.setItem('input_text', this.inputText);
        this.setOutputText();
    }


    private saveRegex() {
        localStorage.setItem('regex', this.regex);
        this.setOutputText();
    }

    private setOutputText(){
        var newText = AppComponent.replace(this.inputText, this.regex);

        if (newText) {
            this.outputText = newText;
        }
    }

    private initFields() {
        //todo: remove this
        localStorage.setItem('regex', '^\\[\"|^a\\[\"|\"\\]$');

        if (localStorage.getItem('input_text'))
            this.inputText = localStorage.getItem('input_text');
        if (localStorage.getItem('regex'))
            this.regex = localStorage.getItem('regex');
    }
}
