import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-cunninghamella2.component.html',
    styleUrls: ['text.component.css']
})

export class TextCunninghamella2Component {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }
}