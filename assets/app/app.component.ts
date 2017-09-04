import { Component, Input } from '@angular/core';

import { ThemeManagerService } from './services/themeManager.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ThemeManagerService]
})
export class AppComponent {
    @Input() theme: number = 0;
    constructor() {

    }

}