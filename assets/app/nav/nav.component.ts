import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'app/assets/img/logo1.png'
    }

    ngOnInit() {

    }

}