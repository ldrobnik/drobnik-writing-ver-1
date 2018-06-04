import {Component} from "@angular/core";

import {ResetScrollService} from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostoken.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostokEnComponent {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

}