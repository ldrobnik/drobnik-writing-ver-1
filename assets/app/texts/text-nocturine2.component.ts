import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-nocturine2.component.html',
    styleUrls: ['text.component.css']
})

export class TextNocturine2Component {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }
}