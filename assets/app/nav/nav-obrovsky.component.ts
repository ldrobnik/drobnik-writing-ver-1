import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-obrovsky',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav-obrovsky.component.css']
})

export class NavObrovskyComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo2.png';
    }

    ngOnInit() {

    }

}