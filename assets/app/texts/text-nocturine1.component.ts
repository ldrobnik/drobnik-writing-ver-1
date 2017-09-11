import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";


@Component({
    templateUrl: 'text-nocturine1.component.html',
    styleUrls: ['text.component.css']
})

export class TextNocturine1Component {

    resetScroll() {
        const scrollService = new ResetScrollService();
        scrollService.resetScroll();
    }

}