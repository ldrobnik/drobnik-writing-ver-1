import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-nocturine1en.component.html',
    styleUrls: ['text.component.css']
})

export class TextNocturine1EnComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}