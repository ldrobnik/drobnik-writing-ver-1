import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostok1.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostok1Component {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

}