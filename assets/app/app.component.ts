import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // @Input() theme : Number;
    // @Output() outputEvent:EventEmitter<string> = new EventEmitter();
    // @Output() inputDataChange = new EventEmitter();

    constructor() {

    }

    // set a property that holds a random color for our style
    theme = this.getRandomTheme();
    // theme = 0;

    // function to get random colors
    public getRandomTheme() {

        return Math.floor(Math.random() * 6);
    }

    //function to set a new random color
    setTheme() {
        this.theme = this.getRandomTheme();
    }

    // increaseTheme(value) {
    //     this.outputEvent.emit(value);
    //     var newValue = value + 1;
    //     if (newValue >= 6) {
    //         newValue = 0;
    //     }
    //     this.inputDataChange.emit(newValue);
    //
    // }

}