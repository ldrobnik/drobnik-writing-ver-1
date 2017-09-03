import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component ({
    selector: 'app-nav-nocturine',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav-nocturine.component.css']
})

export class NavNocturineComponent implements OnInit {

    logoPath: string;
    theme: number;
    // @Output themeChanged = new EventEmitter<number>();
    //
    // onThemeChange(themeNumber) {
    //     this.themeChanged.emit(themeNumber);
    // }

    constructor() {
        this.logoPath = 'images/logo1.png';
    }


    ngOnInit() {

    }

}