import {Component} from '@angular/core';

@Component({
    selector: 'frame-inspector-popup',
    templateUrl: './app.component.html'
})
export class AppComponent {
    private regex: string = '^\\[\"|^a\\[\"|\"\\]$';
    private input_field: Element;
    private regex_field: Element;

    constructor(){
        this.initFields();
    }

    private renderResult(text) {
        document.getElementById("result").innerText = text;
    }

    private replace(input, regex) {
        var regexp = new RegExp(regex, 'g');
        return input.replace(regexp, "");
    }

    private saveInput() {
        localStorage.setItem('input_text', this.input_field.nodeValue);
    }

    private saveRegex() {
        localStorage.setItem('regex', this.regex_field.nodeValue);
    }

    private initFields() {
        this.input_field = document.getElementById('input_text');
        this.regex_field = document.getElementById('regex');

        if (localStorage.getItem('input_text'))
            this.input_field.nodeValue = localStorage.getItem('input_text');
        if (localStorage.getItem('regex'))
            this.regex_field.nodeValue = localStorage.getItem('regex');

        this.input_field.addEventListener('blur', this.saveInput);
        this.regex_field.addEventListener('blur', this.saveRegex);
    }
}
