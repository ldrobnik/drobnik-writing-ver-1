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

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) {
        // this.theme = appComponent.theme;
        // this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png';
    }

    // onChangeTheme(themeNumber) {
    //     this.theme = themeNumber;
    //     this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png';
    //     this.themeChanged.emit({theme: this.theme});
    // }



    ngOnInit() {

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
                    this.theme =Math.floor(Math.random()*6);
                }
                this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png';
                console.log(this.theme);
            });



    }

}