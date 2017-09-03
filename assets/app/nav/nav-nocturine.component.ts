import { Component, OnInit } from "@angular/core";

import { ThemeManagerService } from "../services/theme-manager.service";

@Component ({
    selector: 'app-nav-nocturine',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav-nocturine.component.css']
})

export class NavNocturineComponent implements OnInit {

    logoPath: string;
    theme: number;


    constructor(private themeManagerService: ThemeManagerService) {
        this.logoPath = 'images/logo1.png';
        this.theme = themeManagerService.theme;
    }


    ngOnInit() {

    }

}