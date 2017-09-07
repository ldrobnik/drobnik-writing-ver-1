import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    template: '<div></div>',
    styleUrls: ['./random.component.css']
})

export class RandomComponent implements OnInit {

    routesPl = ['nocturine1', 'cunninghamella1', 'vostok1', 'wszystkozernosc', 'moths', 'obrovsky'];
    routesEn = ['nocturine1/en', 'cunninghamella1/en', 'vostok1/en', 'wszystkozernosc/en', 'moths/en', 'obrovsky/en'];


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        console.log(this.router.url);
    }
}