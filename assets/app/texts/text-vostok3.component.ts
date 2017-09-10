import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostok3.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostok3Component {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }
}