import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports a library for using Angular in a web browser
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavObrovskyComponent } from "./nav/nav-obrovsky.component";
import { BioComponent } from "./bio/bio.component";
import { TextsComponent } from "./texts/texts.component";

@NgModule({
    declarations: [
        AppComponent,
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