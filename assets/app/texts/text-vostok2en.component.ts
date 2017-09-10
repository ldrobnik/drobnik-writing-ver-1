import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostok2en.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostok2EnComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}