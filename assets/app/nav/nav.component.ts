import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { AppComponent } from "../app.component";

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    logoPath: string;
    theme: number;
    // @Output themeChanged = new EventEmitter<number>();
    //
    // onThemeChange(themeNumber) {
    //     this.themeChanged.emit(themeNumber);
    // }

    constructor(private appComponent: AppComponent) {
        this.theme = appComponent.theme;
        console.log(this.theme);
        this.logoPath = 'images/logo1.png';
    }



    ngOnInit() {


    }

}