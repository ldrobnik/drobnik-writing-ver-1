import {Component} from "@angular/core";

import {ResetScrollService} from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostok.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostokComponent {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

}