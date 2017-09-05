import { Routes, RouterModule } from "@angular/router";

import { BioComponent } from "./bio/bio.component";
import { TextsComponent } from "./texts/texts.component";
import { TextNocturine1Component } from "./texts/text-nocturine1.component";
import { TextCunninghamella1Component } from "./texts/text-cunninghamella1.component";
import { TextVostok1Component } from "./texts/text-vostok1.component";
import { TextWszystkozernoscComponent } from "./texts/text-wszystkozernosc.component";
import { TextMothsComponent } from "./texts/text-moths.component";
import { TextObrovskyComponent } from "./texts/text-obrovsky.component";


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/nocturine1', pathMatch: 'full'},
    {path: 'bio', component: BioComponent},
    {path: 'texts', component: TextsComponent},
    {path: 'nocturine1', component: TextNocturine1Component},
    {path: 'cunninghamella1', component: TextCunninghamella1Component},
    {path: 'vostok1', component: TextVostok1Component},
    {path: 'wszystkozernosc', component: TextWszystkozernoscComponent},
    {path: 'moths', component: TextMothsComponent},
    {path: 'obrovsky', component: TextObrovskyComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);