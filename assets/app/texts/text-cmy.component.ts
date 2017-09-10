import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-cmy.component.html',
    styleUrls: ['text.component.css']
})

export class TextCmyComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}