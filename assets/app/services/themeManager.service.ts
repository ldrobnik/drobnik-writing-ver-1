import {OnInit, Input, Injectable} from "@angular/core";

@Injectable()
export class ThemeManagerService implements OnInit {

    @Input() theme: number;

    ngOnInit() {
        this.theme=0;
    };
}