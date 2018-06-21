"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var reset_scroll_service_1 = require("../services/reset-scroll.service");
var NavComponent = (function () {
    function NavComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.langSet = false; //specifies whether the user has chosen the language or reached the site with language-specific route (thus automatically setting the language)
        this.routesPl = ['nocturine', 'cunninghamella', 'vostok', 'wszystkozernosc', 'cmy', 'obrovsky']; //specifies all available urls of Polish texts
        this.routesEn = ['nocturine/en', 'cunninghamella/en', 'vostok/en', 'moths/en', 'obrovsky/en']; //specifies all available urls of English texts
        this.dropdownMaxHeight = (window.innerHeight - 60) + "px"; // maximum height of dropdown menus depending on screen height
    }
    //method changing the language and looking for the equivalent text in the other language
    NavComponent.prototype.changeLang = function () {
        var currentUrl = this.router.url; //holds the current path
        var equivalentPath; //specifies the path of the equivalent text in the other language, if exists
        //look for equivalent of the current text in the other language
        if (this.langEn) {
            if (currentUrl.includes('moths')) {
                equivalentPath = "cmy";
            }
            else {
                equivalentPath = currentUrl.slice(1, -3); //cut the '/en' ending off the path
            }
        }
        else {
            if (currentUrl.includes('cmy')) {
                equivalentPath = "moths/en";
            }
            else {
                equivalentPath = currentUrl + "/en";
            }
        }
        this.langEn = !this.langEn; //change website language langEN - English; !langEn - Polish
        this.storeLang(); //stores the language in local storage
        //for English texts not having equivalents in Polish, go to random Polish text, for the rest - go to the Polish equivalent text path:
        if (currentUrl.includes('cunninghamella2') || currentUrl.includes('wszystkozernosc') || currentUrl.includes('biegnacyczlowiek')) {
            this.goToRandomText();
        }
        else {
            this.router.navigate([equivalentPath]);
        }
        this.resetScroll();
    };
    //method resetting window scrolling
    NavComponent.prototype.resetScroll = function () {
        var scrollService = new reset_scroll_service_1.ResetScrollService();
        scrollService.resetScroll();
    };
    //set maximum dropdown menu height depending on screen height
    NavComponent.prototype.onResize = function (event) {
        this.dropdownMaxHeight = (event.target.innerHeight - 60) + "px";
    };
    //method to store current language in local storage
    NavComponent.prototype.storeLang = function () {
        if (this.langEn == true) {
            localStorage.setItem("langEn", "true");
        }
        else {
            localStorage.setItem("langEn", "false");
        }
    };
    //method to remember the user has acknowledged the use local storage
    NavComponent.prototype.acceptLocalStorage = function () {
        this.locStorageAccepted = true;
        localStorage.setItem("locStorageAccepted", "true");
    };
    //method for choosing language on the splash screen
    NavComponent.prototype.chooseLang = function (lang) {
        this.langEn = lang; // set to false if Polish, to true if English
        this.storeLang(); // stores the language in local storage
        if (!this.langEn) {
            this.langSet = true;
            this.router.navigate(['/']);
        }
        else {
            this.langSet = true;
            this.router.navigate(['random/en']);
        }
    };
    //method to track texts read
    NavComponent.prototype.trackText = function (url) {
        if (url.includes('/en')) {
            if (this.visitedRoutesEn.length >= this.routesEn.length - 1) {
                this.visitedRoutesEn.length = 0; //reset array if all English texts have been read
            }
            if (this.visitedRoutesEn.indexOf(url) === -1) {
                this.visitedRoutesEn.push(url); //add the current url to English texts read
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("visitedRoutesEn", JSON.stringify(this.visitedRoutesEn)); //store the array in local storage
                }
            }
        }
        else {
            if (this.visitedRoutesPl.length >= this.routesPl.length - 1) {
                this.visitedRoutesPl.length = 0; //reset array if all English texts have been read
            }
            if (this.visitedRoutesPl.indexOf(url) === -1) {
                this.visitedRoutesPl.push(url); //add the current url to Polish texts read
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("visitedRoutesPl", JSON.stringify(this.visitedRoutesPl)); //store the array in local storage
                }
            }
        }
    };
    //method navigating to a random text (that hasn't been yet read) in the current language
    NavComponent.prototype.goToRandomText = function () {
        var _this = this;
        var randomPath; //holds the path to a randomly chosen text
        if (this.langSet == true) {
            if (!this.langEn) {
                if (this.visitedRoutesPl.length < this.routesPl.length) {
                    do {
                        randomPath = this.routesPl[Math.floor(Math.random() * this.routesPl.length)];
                    } while (this.visitedRoutesPl.indexOf("/" + randomPath) >= 0); //only go to a given path if it hasn't been visited yet
                }
                else {
                    randomPath = this.routesPl[Math.floor(Math.random() * this.routesPl.length)];
                    this.visitedRoutesPl.length = 0;
                }
            }
            else {
                if (this.visitedRoutesEn.length < this.routesEn.length) {
                    do {
                        randomPath = this.routesEn[Math.floor(Math.random() * this.routesEn.length)];
                    } while (this.visitedRoutesEn.indexOf("/" + randomPath) >= 0); //only go to a given path if it hasn't been visited yet
                }
                else {
                    randomPath = this.routesEn[Math.floor(Math.random() * this.routesEn.length)];
                    this.visitedRoutesEn.length = 0;
                }
            }
            this.resetScroll();
            // navigates to the random path while removing the 'random' or 'random/en' route from history
            setTimeout(function () {
                _this.router.navigate([randomPath], { replaceUrl: true });
            });
        }
    };
    NavComponent.prototype.ngOnInit = function () {
        //check whether language and texts visited are stored in local storage
        var _this = this;
        if (typeof (Storage) !== "undefined") {
            //check info about language in local storage
            if (localStorage.getItem("langEn") !== "undefined") {
                if (localStorage.getItem("langEn") === "true") {
                    this.langEn = true;
                    this.langSet = true;
                }
                else if (localStorage.getItem("langEn") === "false") {
                    this.langEn = false;
                    this.langSet = true;
                }
                else {
                    this.langEn = undefined;
                    this.langSet = false;
                }
            }
            //check whether the user has acknowledged that the site uses local storage
            if (localStorage.getItem("locStorageAccepted") !== "undefined") {
                if (localStorage.getItem("locStorageAccepted") === "true") {
                    this.locStorageAccepted = true;
                }
                else {
                    this.locStorageAccepted = false;
                }
            }
            //check info about visited links in local storage
            if (localStorage.getItem("visitedRoutesPl") !== null) {
                this.visitedRoutesPl = JSON.parse(localStorage.getItem("visitedRoutesPl"));
            }
            else {
                this.visitedRoutesPl = [];
            }
            if (localStorage.getItem("visitedRoutesEn") !== null) {
                this.visitedRoutesEn = JSON.parse(localStorage.getItem("visitedRoutesEn"));
            }
            else {
                this.visitedRoutesEn = [];
            }
        }
        //dynamically change theme depending on routing
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            //to make Google Analytics track routes:
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
            if (!_this.router.url.includes('random') && !_this.router.url.includes('bio')) {
                _this.trackText(_this.router.url);
            }
            _this.theme = event['theme'];
            _this.logoPath = (_this.theme == 1 || _this.theme == 5) ? 'images/logo2.png' : 'images/logo1.png'; //choose theme-appropriate logo
            if (!_this.router.url.includes('random')) {
                _this.langEn = _this.router.url.includes('/en'); //check the language based on the routing path (all English texts have the '/en' bit
                _this.langSet = true; //inform the app the language has already been chosen
                _this.storeLang(); // store the language in local storage
            }
            else {
                _this.goToRandomText();
            }
        });
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavComponent.prototype, "onResize", null);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
