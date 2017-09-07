import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";


import { AppComponent } from "../app.component";

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
    // @Output() themeChanged = new EventEmitter<any>();
    logoPath: string;
    theme: number;
    langEn: boolean;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) {
        // this.theme = appComponent.theme;
        // this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png';
    }

    changeLang() {
        this.langEn =! this.langEn; //change website language langEN - English; !langEn - Polish
    }

    resetScroll() {
        window.scrollTo(0,0); //to reset position when clicking menu links
    }


    ngOnInit() {

        //dynamically change theme depending on routing

        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .subscribe((event) => {
                this.theme = event['theme'];
                if (this.theme == 9) {
                    this.theme =Math.floor(Math.random()*6); //assign random theme for bio page
                }
                this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png'; //choose theme-appropriate logo
            });
        this.langEn = false;


    }

}