import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    // set a property that holds a random color for our style
    theme = this.getRandomTheme();

    // function to get random colors
    public getRandomTheme() {

        return Math.floor(Math.random() * 6);
    }

    //function to set a new random color
    setTheme() {
        this.theme = this.getRandomTheme();
    }

}