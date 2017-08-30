import {Routes, RouterModule, Router} from "@angular/router";

import { BioComponent } from "./bio/bio.component";
import { TextsComponent } from "./texts/texts.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/texts', pathMatch: 'full'},
    {path: 'bio', component: BioComponent},
    {path: 'texts', component: TextsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);