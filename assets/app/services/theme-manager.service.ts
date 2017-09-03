import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class ThemeManagerService implements OnInit {


    // set a property that holds a random color for our style
    theme = this.getRandomTheme();
    // theme = 0;

    // function to get random colors
    getRandomTheme() {

        return Math.floor(Math.random() * 6);
    }

    //function to set a new random color
    setTheme() {
        this.theme = this.getRandomTheme();
    }

    ngOnInit() {};
}