"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var bio_component_1 = require("./bio/bio.component");
var random_component_1 = require("./texts/random.component");
var random_en_component_1 = require("./texts/random-en.component");
// import { TextNocturine1Component } from "./texts/text-nocturine1.component";
// import { TextNocturine2Component } from "./texts/text-nocturine2.component";
var text_nocturine3_component_1 = require("./texts/text-nocturine3.component");
// import { TextNocturine1EnComponent } from "./texts/text-nocturine1en.component";
// import { TextNocturine2EnComponent } from "./texts/text-nocturine2en.component";
var text_nocturine3en_component_1 = require("./texts/text-nocturine3en.component");
var text_cunninghamella1_component_1 = require("./texts/text-cunninghamella1.component");
// import { TextCunninghamella2Component } from "./texts/text-cunninghamella2.component";
// import { TextCunninghamella3Component } from "./texts/text-cunninghamella3.component";
var text_cunninghamella1en_component_1 = require("./texts/text-cunninghamella1en.component");
var text_vostok1_component_1 = require("./texts/text-vostok1.component");
// import { TextVostok2Component } from "./texts/text-vostok2.component";
// import { TextVostok3Component } from "./texts/text-vostok3.component";
// import { TextVostok4Component } from "./texts/text-vostok4.component";
var text_vostok1en_component_1 = require("./texts/text-vostok1en.component");
// import { TextVostok2EnComponent } from "./texts/text-vostok2en.component";
// import { TextVostok3EnComponent } from "./texts/text-vostok3en.component";
// import { TextVostok4EnComponent } from "./texts/text-vostok4en.component";
// import { TextBiegnacyczlowiekComponent } from "./texts/text-biegnacyczlowiek.component";
var text_wszystkozernosc_component_1 = require("./texts/text-wszystkozernosc.component");
var text_cmy_component_1 = require("./texts/text-cmy.component");
var text_moths_component_1 = require("./texts/text-moths.component");
var text_obrovsky_component_1 = require("./texts/text-obrovsky.component");
var text_obrovskyen_component_1 = require("./texts/text-obrovskyen.component");
var APP_ROUTES = [
    { path: '', redirectTo: '/random', pathMatch: 'full' },
    { path: 'bio', component: bio_component_1.BioComponent, data: { title: 'Łukasz Drobnik - prozaik', theme: 5 } },
    { path: 'bio/en', component: bio_component_1.BioComponent, data: { title: 'Łukasz Drobnik - fiction writer', theme: 5 } },
    { path: 'random', component: random_component_1.RandomComponent, data: { title: 'Łukasz Drobnik - oficjalna strona / official website', theme: 0 } },
    { path: 'random/en', component: random_en_component_1.RandomEnComponent, data: { title: 'Łukasz Drobnik - oficjalna strona / official website', theme: 0 } },
    // {path: 'nocturine1', component: TextNocturine1Component, data: {title: 'Łukasz Drobnik - Nocturine - Ośmiobitowe sny', theme: 0}},
    // {path: 'nocturine2', component: TextNocturine2Component, data: {title: 'Łukasz Drobnik - Nocturine - W morskiej wnętrzności', theme: 0}},
    { path: 'nocturine', component: text_nocturine3_component_1.TextNocturine3Component, data: { title: 'Łukasz Drobnik - Nocturine (fragment)', theme: 0 } },
    // {path: 'nocturine1/en', component: TextNocturine1EnComponent, data: {title: 'Łukasz Drobnik - Nocturine - 8-bit Dreams', theme: 0}},
    // {path: 'nocturine2/en', component: TextNocturine2EnComponent, data: {title: 'Łukasz Drobnik - Nocturine - Through the Sea’s Gut', theme: 0}},
    { path: 'nocturine/en', component: text_nocturine3en_component_1.TextNocturine3EnComponent, data: { title: 'Łukasz Drobnik - Nocturine (fragment)', theme: 0 } },
    { path: 'cunninghamella', component: text_cunninghamella1_component_1.TextCunninghamella1Component, data: { title: 'Łukasz Drobnik - Cunninghamella (fragment)', theme: 1 } },
    // {path: 'cunninghamella2', component: TextCunninghamella2Component, data: {title: 'Łukasz Drobnik - Cunninghamella - Rozdział dziesiąty', theme: 1}},
    // {path: 'cunninghamella3', component: TextCunninghamella3Component, data: {title: 'Łukasz Drobnik - Cunninghamella - Rozdział dwunasty', theme: 1}},
    { path: 'cunninghamella/en', component: text_cunninghamella1en_component_1.TextCunninghamella1EnComponent, data: { title: 'Łukasz Drobnik - Cunninghamella (fragment)', theme: 1 } },
    { path: 'vostok', component: text_vostok1_component_1.TextVostok1Component, data: { title: 'Łukasz Drobnik - Vostok - Rozdział pierwszy', theme: 2 } },
    // {path: 'vostok2', component: TextVostok2Component, data: {title: 'Łukasz Drobnik - Vostok - Rozdział drugi', theme: 2}},
    // {path: 'vostok3', component: TextVostok3Component, data: {title: 'Łukasz Drobnik - Vostok - Rozdział trzeci', theme: 2}},
    // {path: 'vostok4', component: TextVostok4Component, data: {title: 'Łukasz Drobnik - Vostok - Rozdział czwarty', theme: 2}},
    { path: 'vostok/en', component: text_vostok1en_component_1.TextVostok1EnComponent, data: { title: 'Łukasz Drobnik - Vostok - Chapter One', theme: 2 } },
    // {path: 'vostok2/en', component: TextVostok2EnComponent, data: {title: 'Łukasz Drobnik - Vostok - Chapter Two', theme: 2}},
    // {path: 'vostok3/en', component: TextVostok3EnComponent, data: {title: 'Łukasz Drobnik - Vostok - Chapter Three', theme: 2}},
    // {path: 'vostok4/en', component: TextVostok4EnComponent, data: {title: 'Łukasz Drobnik - Vostok - Chapter Four', theme: 2}},
    // {path: 'biegnacyczlowiek', component: TextBiegnacyczlowiekComponent, data: {title: 'Łukasz Drobnik - Biegnący człowiek', theme: 3}},
    { path: 'wszystkozernosc', component: text_wszystkozernosc_component_1.TextWszystkozernoscComponent, data: { title: 'Łukasz Drobnik - Wszystkożerność', theme: 3 } },
    { path: 'cmy', component: text_cmy_component_1.TextCmyComponent, data: { title: 'Łukasz Drobnik - Ćmy', theme: 4 } },
    { path: 'moths/en', component: text_moths_component_1.TextMothsComponent, data: { title: 'Łukasz Drobnik - Moths', theme: 4 } },
    { path: 'obrovsky', component: text_obrovsky_component_1.TextObrovskyComponent, data: { title: 'Łukasz Drobnik - Obrovsky - Wszystko, co podziemne', theme: 5 } },
    { path: 'obrovsky/en', component: text_obrovskyen_component_1.TextObrovskyEnComponent, data: { title: 'Łukasz Drobnik - Obrovsky - All Things Subterranean', theme: 5 } },
    { path: '**', redirectTo: '/random' }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
