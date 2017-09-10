import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-nocturine2en.component.html',
    styleUrls: ['text.component.css']
})

export class TextNocturine2EnComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}