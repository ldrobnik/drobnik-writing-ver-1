import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-vostok',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav-vostok.component.css']
})

export class NavVostokComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo1.png';
    }

    ngOnInit() {

    }

}