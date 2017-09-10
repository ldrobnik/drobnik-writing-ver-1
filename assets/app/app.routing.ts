import { Routes, RouterModule } from "@angular/router";

import { BioComponent } from "./bio/bio.component";
import { RandomComponent } from "./texts/random.component";
import { RandomEnComponent } from "./texts/random-en.component";
import { TextNocturine1Component } from "./texts/text-nocturine1.component";
import { TextNocturine2Component } from "./texts/text-nocturine2.component";
import { TextNocturine3Component } from "./texts/text-nocturine3.component";
import { TextNocturine1EnComponent } from "./texts/text-nocturine1en.component";
import { TextNocturine2EnComponent } from "./texts/text-nocturine2en.component";
import { TextNocturine3EnComponent } from "./texts/text-nocturine3en.component";
import { TextCunninghamella1Component } from "./texts/text-cunninghamella1.component";
import { TextCunninghamella2Component } from "./texts/text-cunninghamella2.component";
import { TextCunninghamella1EnComponent } from "./texts/text-cunninghamella1en.component";
import { TextVostok1Component } from "./texts/text-vostok1.component";
import { TextVostok2Component } from "./texts/text-vostok2.component";
import { TextVostok3Component } from "./texts/text-vostok3.component";
import { TextVostok4Component } from "./texts/text-vostok4.component";
import { TextVostok1EnComponent } from "./texts/text-vostok1en.component";
import { TextVostok2EnComponent } from "./texts/text-vostok2en.component";
import { TextVostok3EnComponent } from "./texts/text-vostok3en.component";
import { TextVostok4EnComponent } from "./texts/text-vostok4en.component";
import { TextBiegnacyczlowiekComponent } from "./texts/text-biegnacyczlowiek.component";
import { TextWszystkozernoscComponent } from "./texts/text-wszystkozernosc.component";
import { TextCmyComponent } from "./texts/text-cmy.component";
import { TextMothsComponent } from "./texts/text-moths.component";
import { TextObrovskyComponent } from "./texts/text-obrovsky.component";
import { TextObrovskyEnComponent } from "./texts/text-obrovskyen.component";


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/random', pathMatch: 'full'},
    {path: 'bio', component: BioComponent, data: {title: 'Łukasz Drobnik - fiction writer', theme: 9}},
    {path: 'random', component: RandomComponent, data: {title: 'Łukasz Drobnik', theme: 0 }},
    {path: 'random/en', component: RandomEnComponent, data: {title: 'Łukasz Drobnik', theme: 0 }},
    {path: 'nocturine1', component: TextNocturine1Component, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'nocturine2', component: TextNocturine2Component, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'nocturine3', component: TextNocturine3Component, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'nocturine1/en', component: TextNocturine1EnComponent, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'nocturine2/en', component: TextNocturine2EnComponent, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'nocturine3/en', component: TextNocturine3EnComponent, data: {title: 'Łukasz Drobnik - Nocturine', theme: 0}},
    {path: 'cunninghamella1', component: TextCunninghamella1Component, data: {title: 'Łukasz Drobnik - Cunninghamella', theme: 1}},
    {path: 'cunninghamella2', component: TextCunninghamella2Component, data: {title: 'Łukasz Drobnik - Cunninghamella', theme: 1}},
    {path: 'cunninghamella1/en', component: TextCunninghamella1EnComponent, data: {title: 'Łukasz Drobnik - Cunninghamella', theme: 1}},
    {path: 'vostok1', component: TextVostok1Component, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok2', component: TextVostok2Component, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok3', component: TextVostok3Component, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok4', component: TextVostok4Component, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok1/en', component: TextVostok1EnComponent, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok2/en', component: TextVostok2EnComponent, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok3/en', component: TextVostok3EnComponent, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'vostok4/en', component: TextVostok4EnComponent, data: {title: 'Łukasz Drobnik - Vostok', theme: 2}},
    {path: 'biegnacyczlowiek', component: TextBiegnacyczlowiekComponent, data: {title: 'Łukasz Drobnik - Biegnący człowiek', theme: 3}},
    {path: 'wszystkozernosc', component: TextWszystkozernoscComponent, data: {title: 'Łukasz Drobnik - Wszystkożerność', theme: 3}},
    {path: 'cmy', component: TextCmyComponent, data: {title: 'Łukasz Drobnik - Ćmy', theme: 4}},
    {path: 'moths/en', component: TextMothsComponent, data: {title: 'Łukasz Drobnik - Moths', theme: 4}},
    {path: 'obrovsky', component: TextObrovskyComponent, data: {title: 'Łukasz Drobnik - Obrovsky', theme: 5}},
    {path: 'obrovsky/en', component: TextObrovskyEnComponent, data: {title: 'Łukasz Drobnik - Obrovsky', theme: 5}},
    {path: '**', redirectTo: '/random'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);