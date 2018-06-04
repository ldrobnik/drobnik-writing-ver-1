import {Component} from "@angular/core";

import {ResetScrollService} from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-nocturine.component.html',
    styleUrls: ['text.component.css']
})

export class TextNocturineComponent {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }
}