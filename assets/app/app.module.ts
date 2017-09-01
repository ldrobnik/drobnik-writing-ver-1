import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports a library for using Angular in a web browser
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavNocturineComponent } from "./nav/nav-nocturine.component";
import { NavCunninghamellaComponent } from "./nav/nav-cunninghamella.component";
import { NavVostokComponent } from "./nav/nav-vostok.component";
import { NavOmnivoriaComponent } from "./nav/nav-omnivoria.component";
import { NavDevonianComponent } from "./nav/nav-devonian.component";
import { NavObrovskyComponent } from "./nav/nav-obrovsky.component";
import { BioComponent } from "./bio/bio.component";
import { TextsComponent } from "./texts/texts.component";

@NgModule({
    declarations: [
        AppComponent,
        NavNocturineComponent,
        NavCunninghamellaComponent,
        NavVostokComponent,
        NavOmnivoriaComponent,
        NavDevonianComponent,
        NavObrovskyComponent,
        BioComponent,
        TextsComponent
    ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot(),
        routing
    ],
    bootstrap: [AppComponent] // tells Angular to bootstrap with AppComponent
})
export class AppModule {



}