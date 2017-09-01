import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-devonian',
    templateUrl: './nav-devonian.component.html',
    styleUrls: ['./nav-devonian.component.css']
})

export class NavDevonianComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo1.png'
    }

    ngOnInit() {

    }

}