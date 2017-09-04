import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports a library for using Angular in a web browser
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { BioComponent } from "./bio/bio.component";
import { TextsComponent } from "./texts/texts.component";
import { TextNocturine1Component } from "./texts/text-nocturine1-component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BioComponent,
        TextsComponent,
        TextNocturine1Component
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