import {Component} from "@angular/core";

import {ResetScrollService} from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-cunninghamellaen.component.html',
    styleUrls: ['text.component.css']
})

export class TextCunninghamellaEnComponent {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

}