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
    {path: 'bio', component: BioComponent, data: {title: 'Łukasz Drobnik - fiction writer', theme: 0}},
    {path: 'texts', component: TextsComponent},
    {path: 'nocturine1', component: TextNocturine1Component, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'cunninghamella1', component: TextCunninghamella1Component, data: {title: 'Łukasz Drobnik - Cunninghamella', theme: 1}},
    {path: 'vostok1', component: TextVostok1Component, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'wszystkozernosc', component: TextWszystkozernoscComponent, data: {title: 'Łukasz Drobnik - Wszystkożerność', theme: 3}},
    {path: 'moths', component: TextMothsComponent, data: {title: 'Łukasz Drobnik - Moths', theme: 4}},
    {path: 'obrovsky', component: TextObrovskyComponent, data: {title: 'Łukasz Drobnik - Obrovsky', theme: 5}}
];

export const routing = RouterModule.forRoot(APP_ROUTES);