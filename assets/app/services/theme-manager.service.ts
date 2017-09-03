import { Injectable, OnInit } from "@angular/core";

@Injectable()

export class ThemeManagerService implements OnInit {

    public theme = 0;

    setTheme(value: number) {
        this.theme = value;
    }

    ngOnInit() {};
}