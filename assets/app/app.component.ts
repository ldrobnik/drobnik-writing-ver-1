import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @Input() theme: number = 0;


    setTheme(newTheme: number) {
        this.theme = newTheme;
        console.log(this.theme);
    }

    constructor() {

    }

    ngOnInit() {

    }



}