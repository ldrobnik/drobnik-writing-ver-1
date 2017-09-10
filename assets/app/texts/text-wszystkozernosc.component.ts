import { Component } from "@angular/core";

import { ResetScrollService } from "../services/reset-scroll.service";

@Component({
    templateUrl: 'text-wszystkozernosc.component.html',
    styleUrls: ['text.component.css']
})

export class TextWszystkozernoscComponent {

    resetScroll() {
        const service = new ResetScrollService();
        service.resetScroll();
    }

}