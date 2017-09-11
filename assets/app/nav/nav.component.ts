import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import { ResetScrollService } from "../services/reset-scroll.service";


import { AppComponent } from "../app.component";

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    logoPath: string; //specifies the path of website logo depending on the current theme
    theme: number; //the number 0-5 specifying the theme
    langEn: boolean; //specifies whether the language is English (true) or Polish (false)
    routesPl = ['nocturine1', 'nocturine2', 'nocturine3', 'cunninghamella1', 'cunninghamella2', 'vostok1', 'vostok2', 'vostok3', 'vostok4', 'biegnacyczlowiek', 'wszystkozernosc', 'moths', 'obrovsky']; //specifies all available urls of Polish texts
    routesEn = ['nocturine1/en', 'nocturine2/en', 'nocturine3/en', 'cunninghamella1/en', 'vostok1/en', 'vostok2/en', 'vostok3/en', 'vostok4/en', 'moths/en', 'obrovsky/en']; //specifies all available urls of English texts
    randomPath : string; //holds the path to randomly chosen text
    currentUrl: string; //holds the current path
    equivalentPath: string; //specifies the path of the equivalent text in the other language, if exists
    visitedRoutesPl = []; //holds all visited paths to Polish texts
    visitedRoutesEn = []; //same for English texts


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    //method changing the language and looking for the equivalent text in the other language
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

        //for texts not having equivalents in the other language, go to random text, for the rest - go to the equivalent text path:

        if (this.currentUrl.includes('cunninghamella2') || this.currentUrl.includes('wszystkozernosc') || this.currentUrl.includes('biegnacyczlowiek')) {
            this.goToRandomText();
        } else {
            this.router.navigate([this.equivalentPath]);
        }

        this.resetScroll();
    }

    //method resetting window scrolling
    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }


    //method to track texts read

    trackText(url: string) {
        if (url.includes('/en')) {
            if (this.visitedRoutesPl.length >= this.routesPl) {
                this.visitedRoutesPl = [];
            }
            this.visitedRoutesPl.push(url);
        } else {
            if (this.visitedRoutesEn.length >= this.routesEn) {
                this.visitedRoutesEn = [];
            }
            this.visitedRoutesEn.push(url);
        }
        console.log(this.visitedRoutesPl);
        console.log(this.visitedRoutesEn);
    }


    goToRandomText() {

        if (this.router.url.includes('/en')) {
            this.randomPath = this.routesEn[Math.floor(Math.random() * this.routesEn.length)];
        } else {
            this.randomPath = this.routesPl[Math.floor(Math.random() * this.routesPl.length)];
        }
        this.resetScroll();
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
                this.trackText(this.router.url);
                this.theme = event['theme'];
                if (this.theme == 9) {
                    this.theme = Math.floor(Math.random()*6); //assign random theme for bio page
                }
                this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png'; //choose theme-appropriate logo
                this.langEn = this.router.url.includes('/en'); //check the language based on the routing path (all English texts have the '/en' bit
                if (this.router.url.includes('random')) {
                    this.goToRandomText();
                }
            });



    }

}