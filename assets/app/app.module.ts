import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports a library for using Angular in a web browser
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { BioComponent } from "./bio/bio.component";
import { RandomComponent } from "./texts/random.component";
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
import { TextMothsComponent } from "./texts/text-moths.component";
import { TextObrovskyComponent } from "./texts/text-obrovsky.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BioComponent,
        RandomComponent,
        TextNocturine1Component,
        TextNocturine2Component,
        TextNocturine3Component,
        TextNocturine1EnComponent,
        TextNocturine2EnComponent,
        TextNocturine3EnComponent,
        TextCunninghamella1Component,
        TextCunninghamella2Component,
        TextCunninghamella1EnComponent,
        TextVostok1Component,
        TextVostok2Component,
        TextVostok3Component,
        TextVostok4Component,
        TextVostok1EnComponent,
        TextVostok2EnComponent,
        TextVostok3EnComponent,
        TextVostok4EnComponent,
        TextBiegnacyczlowiekComponent,
        TextWszystkozernoscComponent,
        TextMothsComponent,
        TextObrovskyComponent
    ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        routing
    ],
    bootstrap: [AppComponent], // tells Angular to bootstrap with AppComponent
    prividers: []
})
export class AppModule {



}