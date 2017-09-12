import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import { ResetScrollService } from "../services/reset-scroll.service";


@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    logoPath: string; //specifies the path of website logo depending on the current theme
    theme: number; //the number 0-5 specifying the theme
    langEn: boolean; //specifies whether the language is English (true) or Polish (false)
    langSet = false; //specifies whether the user has chosen the language or reached the site with language-specific route (thus automatically setting the language)
    routesPl = ['nocturine1', 'nocturine2', 'nocturine3', 'cunninghamella1', 'cunninghamella2', 'vostok1', 'vostok2', 'vostok3', 'vostok4', 'biegnacyczlowiek', 'wszystkozernosc', 'moths', 'obrovsky']; //specifies all available urls of Polish texts
    routesEn = ['nocturine1/en', 'nocturine2/en', 'nocturine3/en', 'cunninghamella1/en', 'vostok1/en', 'vostok2/en', 'vostok3/en', 'vostok4/en', 'moths/en', 'obrovsky/en']; //specifies all available urls of English texts
    // randomPath : string; //holds the path to randomly chosen text
    // currentUrl: string; //holds the current path
    // equivalentPath: string; //specifies the path of the equivalent text in the other language, if exists
    visitedRoutesPl = []; //holds all visited paths to Polish texts
    visitedRoutesEn = []; //same for English texts


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    //method changing the language and looking for the equivalent text in the other language
    changeLang() {
        var currentUrl = this.router.url; //holds the current path
        var equivalentPath: string; //specifies the path of the equivalent text in the other language, if exists
        //look for equivalent of the current text in the other language
        if (this.langEn) {

            if (currentUrl.includes('moths')) {
                equivalentPath = "cmy";
            } else {
                equivalentPath = currentUrl.slice(1, -3); //cut the '/en' ending off the path
            }

        } else {
            if (currentUrl.includes('cmy')) {
                equivalentPath = "moths/en";
            } else {
                equivalentPath = currentUrl + "/en";
            }
        }
        this.langEn =! this.langEn; //change website language langEN - English; !langEn - Polish
        this.storeLang(); //stores the language in local storage

        //for English texts not having equivalents in Polish, go to random Polish text, for the rest - go to the Polish equivalent text path:

        if (currentUrl.includes('cunninghamella2') || currentUrl.includes('wszystkozernosc') || currentUrl.includes('biegnacyczlowiek')) {
            this.goToRandomText();
        } else {
            this.router.navigate([equivalentPath]);
        }

        this.resetScroll();
    }

    //method resetting window scrolling
    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }


    //method to store current language in localStorage

    storeLang() {
        if (this.langEn == true) {
            localStorage.setItem("langEn", "true")
        } else {
            localStorage.setItem("langEn", "false")
        }
    }

    //method for choosing language on splash screen

    chooseLang(lang: boolean) {
        this.langEn = lang; // set to false if Polish, to true if English
        this.storeLang(); // stores the language in local storage

        if (!this.langEn) {

            this.langSet = true;
            this.router.navigate(['/']);

        } else {

            this.langSet = true;
            this.router.navigate(['random/en']);

        }

    }

    //method to track texts read

    trackText(url: string) {

        if (url.includes('/en')) {
            if (this.visitedRoutesEn.length > this.routesEn.length + 1) {
                this.visitedRoutesEn = []; //reset array if all English texts have been read
            }
            if (this.visitedRoutesEn.indexOf(url) === -1) {
                this.visitedRoutesEn.push(url); //add the current url to English texts read

                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem("visitedRoutesEn", JSON.stringify(this.visitedRoutesEn)); //store the array in local storage
                }
            }
        } else {
            if (this.visitedRoutesPl.length > this.routesPl.length + 1) {
                this.visitedRoutesPl = []; //reset array if all Polish texts have been read
            }
            if (this.visitedRoutesPl.indexOf(url) === -1) {
                this.visitedRoutesPl.push(url); //add the current url to Polish texts read

                if (typeof(Storage) !== "undefined") {
                    localStorage.setItem("visitedRoutesPl", JSON.stringify(this.visitedRoutesPl)); //store the array in local storage
                }
            }
        }
    }


    goToRandomText() {

        var randomPath : string; //holds the path to a randomly chosen text

        if (this.langSet == true) {
            if (this.langEn) {

                do {
                    randomPath = this.routesEn[Math.floor(Math.random() * this.routesEn.length)];
                } while (this.visitedRoutesEn.indexOf("/" + randomPath) >= 0); //only go to a given path if it hasn't been visited yet

            } else {

                do {
                    randomPath = this.routesPl[Math.floor(Math.random() * this.routesPl.length)];
                } while (this.visitedRoutesPl.indexOf("/" + randomPath) >= 0); //only go to a given path if it hasn't been visited yet
            }

            this.resetScroll();
            this.router.navigate([randomPath]);
        }
    }


    ngOnInit() {

        //
        // //check whether language and texts visited are stored in local storage
        //
        if (typeof(Storage) !== "undefined") {

            //check info about language in local storage
            if (localStorage.getItem("langEn") !== "undefined"){
                if (localStorage.getItem("langEn") === "true") {
                    this.langEn = true;
                    this.langSet = true;
                } else if (localStorage.getItem("langEn") === "false") {
                    this.langEn = false;
                    this.langSet = true;
                } else {
                    this.langEn = undefined;
                    this.langSet = false;
                }
            }

            //check info about visited links in local storage
            if (localStorage.getItem("visitedRoutesPl") !== null){
                this.visitedRoutesPl = JSON.parse(localStorage.getItem("visitedRoutesPl"));
            } else {
                this.visitedRoutesPl = [];
            }

            if (localStorage.getItem("visitedRoutesPl") !== null){
                this.visitedRoutesEn = JSON.parse(localStorage.getItem("visitedRoutesEn"));
            } else {
                this.visitedRoutesEn = [];
            }



        }

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

                console.log(localStorage);
                console.log(this.visitedRoutesPl);
                console.log(this.visitedRoutesEn);

                if (!this.router.url.includes('random') && !this.router.url.includes('bio')) {
                    this.trackText(this.router.url);
                }
                this.theme = event['theme'];
                if (this.theme == 9) {
                    this.theme = Math.floor(Math.random()*6); //assign random theme for bio page
                }
                this.logoPath = (this.theme == 1 || this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png'; //choose theme-appropriate logo

                if (!this.router.url.includes('random')) {
                    this.langEn = this.router.url.includes('/en'); //check the language based on the routing path (all English texts have the '/en' bit
                    this.langSet = true; //inform the app the language has already been chosen
                    this.storeLang(); // store the language in local storage

                } else {
                    this.goToRandomText();
                }
            });



    }

}