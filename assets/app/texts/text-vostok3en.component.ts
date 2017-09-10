import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-vostok3en.component.html',
    styleUrls: ['text.component.css']
})

export class TextVostok3EnComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}