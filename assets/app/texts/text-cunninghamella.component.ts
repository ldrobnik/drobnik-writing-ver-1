import {Component} from "@angular/core";

import {ResetScrollService} from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-cunninghamella.component.html',
    styleUrls: ['text.component.css']
})

export class TextCunninghamellaComponent {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

}