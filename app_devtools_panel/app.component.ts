import {Component} from '@angular/core';

@Component({
    selector: 'frame-inspector-dev-panel',
    templateUrl: './app.component.html'
})
export class AppComponent {

    private timeout_count : number = 1000;
    private frames : string[];

    constructor(){
        setTimeout(this.appendFrame(0), this.timeout_count);
    }

    private appendFrame(text: any) {
        this.frames.push(text);
        setTimeout(this.appendFrame(text + 1), this.timeout_count);
    }
}