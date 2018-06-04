import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; // imports a library for using Angular in a web browser
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {routing} from "./app.routing";

import {AppComponent} from "./app.component";
import {NavComponent} from "./nav/nav.component";
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
import {TextMothsComponent} from "./texts/text-moths.component";
import {TextCmyComponent} from "./texts/text-cmy.component";
import {TextObrovskyComponent} from "./texts/text-obrovsky.component";
import {TextObrovskyEnComponent} from "./texts/text-obrovskyen.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BioComponent,
        RandomComponent,
        RandomEnComponent,
        TextNocturineComponent,
        TextNocturineEnComponent,
        TextCunninghamellaComponent,
        TextCunninghamellaEnComponent,
        TextVostokComponent,
        TextVostokEnComponent,
        TextWszystkozernoscComponent,
        TextCmyComponent,
        TextMothsComponent,
        TextObrovskyComponent,
        TextObrovskyEnComponent
    ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        routing
    ],
    bootstrap: [AppComponent], // tells Angular to bootstrap with AppComponent
})
export class AppModule {


}