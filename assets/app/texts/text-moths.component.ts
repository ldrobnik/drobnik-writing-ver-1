import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-moths.component.html',
    styleUrls: ['text.component.css']
})

export class TextMothsComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}