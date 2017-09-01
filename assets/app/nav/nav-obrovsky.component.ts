import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-obrovsky',
    templateUrl: './nav-obrovsky.component.html',
    styleUrls: ['./nav-obrovsky.component.css']
})

export class NavObrovskyComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo1.png'
    }

    ngOnInit() {

    }

}