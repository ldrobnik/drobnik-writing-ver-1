import { Component, OnInit } from "@angular/core";


@Component ({
    selector: 'app-nav-nocturine',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav-nocturine.component.css']
})

export class NavNocturineComponent implements OnInit {

    logoPath: string;

    constructor() {
        this.logoPath = 'images/logo1.png';
    }

    ngOnInit() {

    }

}