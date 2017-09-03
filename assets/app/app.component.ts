import { Component, Input } from '@angular/core';

// import { ThemeManagerService } from "./services/theme-manager.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [ ThemeManagerService ]
})
export class AppComponent {
    theme: number;

    @Input() theme = 0;

    setTheme(themeNumber: number) {
        this.theme = themeNumber;
    }

    constructor() {}

    // constructor(private themeManagerService: ThemeManagerService) {
    //     this.theme = themeManagerService.theme;
    // }

}