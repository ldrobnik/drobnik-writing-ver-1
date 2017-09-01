import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-omnivoria',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav-omnivoria.component.css']
})

export class NavOmnivoriaComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo1.png';
    }

    ngOnInit() {

    }

}