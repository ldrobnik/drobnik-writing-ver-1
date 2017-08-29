import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // imports a library for using Angular in a web browser
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        BsDropdownModule.forRoot()
    ],
    bootstrap: [AppComponent] // tells Angular to bootstrap with AppComponent
})
export class AppModule {

}