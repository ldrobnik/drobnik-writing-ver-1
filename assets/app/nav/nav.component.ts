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

    logoPath: string;
    theme: number;
    langEn: boolean;
    routesPl = ['nocturine1', 'cunninghamella1', 'vostok1', 'wszystkozernosc', 'moths', 'obrovsky'];
    routesEn = ['nocturine1/en', 'cunninghamella1/en', 'vostok1/en', 'wszystkozernosc/en', 'moths/en', 'obrovsky/en'];
    randomPath : string;
    currentUrl: string;
    equivalentPath: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private appComponent: AppComponent) {
        // this.theme = appComponent.theme;
        // this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png';
    }

    changeLang() {
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
        //look for equivalent of the current text in the other language
        if (this.langEn) {

            if (this.currentUrl.includes('moths')) {
                this.equivalentPath = "cmy";
            } else {
                this.equivalentPath = this.currentUrl.slice(1, -3); //cut the '/en' ending off the path
            }

        } else {
            if (this.currentUrl.includes('cmy')) {
                this.equivalentPath = "moths/en";
            } else {
                this.equivalentPath = this.currentUrl + "/en";
            }
        }
        this.langEn =! this.langEn; //change website language langEN - English; !langEn - Polish

        //for Polish texts not having English equivalents go to random text, for the rest - go to the equivalent text path:

        if (this.currentUrl.includes('cunninghamella2') || this.currentUrl.includes('wszystkozernosc') || this.currentUrl.includes('biegnacyczlowiek')) {
            this.goToRandomText();
        } else {
            this.router.navigate([this.equivalentPath]);
        }

        this.resetScroll();
    }

    resetScroll() {
        window.scrollTo(0,0); //to reset position when clicking menu links
    }

    goToRandomText() {

        if (this.langEn) {
            this.randomPath = this.routesEn[Math.floor(Math.random() * this.routesEn.length)];
        } else {
            this.randomPath = this.routesPl[Math.floor(Math.random() * this.routesPl.length)];
        }
        this.router.navigate([this.randomPath]);
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
                this.langEn = this.router.url.includes('/en'); //check the language based on the routing path (all English texts have the '/en' bit
                if (this.router.url.includes('random')) {
                    this.goToRandomText();
                }
            });



    }

}