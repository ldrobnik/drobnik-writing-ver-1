import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // Property specifying the theme: 0 = nocturine, 1 = cunninghamella, 2 = vostok, 3 = omnivoria, 4 = devonian, 5 = obrovsky

    @Input() theme: number = 0;


    //Method changing the theme:

    setTheme(newTheme: number) {
        this.theme = newTheme;
    }

    constructor() {

    }

    ngOnInit() {

    }



}