import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-cunninghamella',
    templateUrl: './nav-cunninghamella.component.html',
    styleUrls: ['./nav-cunninghamella.component.css']
})

export class NavCunninghamellaComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo2.png'
    }

    ngOnInit() {

    }

}