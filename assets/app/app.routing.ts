import {Routes, RouterModule, Router} from "@angular/router";

import { BioComponent } from "./bio/bio.component";
import { TextsComponent } from "./texts/texts.component";
import { TextNocturine1Component } from "./texts/text-nocturine1-component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/nocturine1', pathMatch: 'full'},
    {path: 'bio', component: BioComponent},
    {path: 'texts', component: TextsComponent},
    {path: 'nocturine1', component: TextNocturine1Component}
];

export const routing = RouterModule.forRoot(APP_ROUTES);