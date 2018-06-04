import {Routes, RouterModule} from "@angular/router";

import {BioComponent} from "./bio/bio.component";
import {RandomComponent} from "./texts/random.component";
import {RandomEnComponent} from "./texts/random-en.component";
import {TextNocturineComponent} from "./texts/text-nocturine.component";
import {TextNocturineEnComponent} from "./texts/text-nocturineen.component";
import {TextCunninghamellaComponent} from "./texts/text-cunninghamella.component";
import {TextCunninghamellaEnComponent} from "./texts/text-cunninghamellaen.component";
import {TextVostokComponent} from "./texts/text-vostok.component";
import {TextVostokEnComponent} from "./texts/text-vostoken.component";
import {TextWszystkozernoscComponent} from "./texts/text-wszystkozernosc.component";
import {TextCmyComponent} from "./texts/text-cmy.component";
import {TextMothsComponent} from "./texts/text-moths.component";
import {TextObrovskyComponent} from "./texts/text-obrovsky.component";
import {TextObrovskyEnComponent} from "./texts/text-obrovskyen.component";


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/random', pathMatch: 'full'},
    {path: 'bio', component: BioComponent, data: {title: 'Łukasz Drobnik - prozaik', theme: 5}},
    {path: 'bio/en', component: BioComponent, data: {title: 'Łukasz Drobnik - fiction writer', theme: 5}},
    {
        path: 'random',
        component: RandomComponent,
        data: {title: 'Łukasz Drobnik - oficjalna strona / official website', theme: 0}
    },
    {
        path: 'random/en',
        component: RandomEnComponent,
        data: {title: 'Łukasz Drobnik - oficjalna strona / official website', theme: 0}
    },
    {
        path: 'nocturine',
        component: TextNocturineComponent,
        data: {title: 'Łukasz Drobnik - Nocturine (fragment)', theme: 0}
    },
    {
        path: 'nocturine/en',
        component: TextNocturineEnComponent,
        data: {title: 'Łukasz Drobnik - Nocturine (fragment)', theme: 0}
    },
    {
        path: 'cunninghamella',
        component: TextCunninghamellaComponent,
        data: {title: 'Łukasz Drobnik - Cunninghamella (fragment)', theme: 1}
    },
    {
        path: 'cunninghamella/en',
        component: TextCunninghamellaEnComponent,
        data: {title: 'Łukasz Drobnik - Cunninghamella (fragment)', theme: 1}
    },
    {path: 'vostok', component: TextVostokComponent, data: {title: 'Łukasz Drobnik - Vostok (fragmenty)', theme: 2}},
    {
        path: 'vostok/en',
        component: TextVostokEnComponent,
        data: {title: 'Łukasz Drobnik - Vostok (fragments)', theme: 2}
    },
    {
        path: 'wszystkozernosc',
        component: TextWszystkozernoscComponent,
        data: {title: 'Łukasz Drobnik - Wszystkożerność', theme: 3}
    },
    {path: 'cmy', component: TextCmyComponent, data: {title: 'Łukasz Drobnik - Ćmy', theme: 4}},
    {path: 'moths/en', component: TextMothsComponent, data: {title: 'Łukasz Drobnik - Moths', theme: 4}},
    {
        path: 'obrovsky',
        component: TextObrovskyComponent,
        data: {title: 'Łukasz Drobnik - Obrovsky (fragment)', theme: 5}
    },
    {
        path: 'obrovsky/en',
        component: TextObrovskyEnComponent,
        data: {title: 'Łukasz Drobnik - Obrovsky (fragment)', theme: 5}
    },
    {path: '**', redirectTo: '/random'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);