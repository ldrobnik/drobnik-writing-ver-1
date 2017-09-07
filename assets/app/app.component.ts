import { Component, Input, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // Property specifying the theme: 0 = nocturine, 1 = cunninghamella, 2 = vostok, 3 = omnivoria, 4 = devonian, 5 = obrovsky

    // @Input() theme: number;


    constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {

    }

    ngOnInit() {

        //dynamically change the page title depending on routing

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
                this.titleService.setTitle(event['title']);
            });
    }



}