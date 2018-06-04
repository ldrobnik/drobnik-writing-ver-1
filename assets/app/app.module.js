"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser"); // imports a library for using Angular in a web browser
var dropdown_1 = require("ngx-bootstrap/dropdown");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var bio_component_1 = require("./bio/bio.component");
var random_component_1 = require("./texts/random.component");
var random_en_component_1 = require("./texts/random-en.component");
var text_nocturine1_component_1 = require("./texts/text-nocturine1.component");
var text_nocturine2_component_1 = require("./texts/text-nocturine2.component");
var text_nocturine3_component_1 = require("./texts/text-nocturine3.component");
var text_nocturine1en_component_1 = require("./texts/text-nocturine1en.component");
var text_nocturine2en_component_1 = require("./texts/text-nocturine2en.component");
var text_nocturine3en_component_1 = require("./texts/text-nocturine3en.component");
var text_cunninghamella1_component_1 = require("./texts/text-cunninghamella1.component");
var text_cunninghamella2_component_1 = require("./texts/text-cunninghamella2.component");
var text_cunninghamella3_component_1 = require("./texts/text-cunninghamella3.component");
var text_cunninghamella1en_component_1 = require("./texts/text-cunninghamella1en.component");
var text_vostok1_component_1 = require("./texts/text-vostok1.component");
var text_vostok2_component_1 = require("./texts/text-vostok2.component");
var text_vostok3_component_1 = require("./texts/text-vostok3.component");
var text_vostok4_component_1 = require("./texts/text-vostok4.component");
var text_vostok1en_component_1 = require("./texts/text-vostok1en.component");
var text_vostok2en_component_1 = require("./texts/text-vostok2en.component");
var text_vostok3en_component_1 = require("./texts/text-vostok3en.component");
var text_vostok4en_component_1 = require("./texts/text-vostok4en.component");
var text_biegnacyczlowiek_component_1 = require("./texts/text-biegnacyczlowiek.component");
var text_wszystkozernosc_component_1 = require("./texts/text-wszystkozernosc.component");
var text_moths_component_1 = require("./texts/text-moths.component");
var text_cmy_component_1 = require("./texts/text-cmy.component");
var text_obrovsky_component_1 = require("./texts/text-obrovsky.component");
var text_obrovskyen_component_1 = require("./texts/text-obrovskyen.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            bio_component_1.BioComponent,
            random_component_1.RandomComponent,
            random_en_component_1.RandomEnComponent,
            text_nocturine1_component_1.TextNocturine1Component,
            text_nocturine2_component_1.TextNocturine2Component,
            text_nocturine3_component_1.TextNocturine3Component,
            text_nocturine1en_component_1.TextNocturine1EnComponent,
            text_nocturine2en_component_1.TextNocturine2EnComponent,
            text_nocturine3en_component_1.TextNocturine3EnComponent,
            text_cunninghamella1_component_1.TextCunninghamella1Component,
            text_cunninghamella2_component_1.TextCunninghamella2Component,
            text_cunninghamella3_component_1.TextCunninghamella3Component,
            text_cunninghamella1en_component_1.TextCunninghamella1EnComponent,
            text_vostok1_component_1.TextVostok1Component,
            text_vostok2_component_1.TextVostok2Component,
            text_vostok3_component_1.TextVostok3Component,
            text_vostok4_component_1.TextVostok4Component,
            text_vostok1en_component_1.TextVostok1EnComponent,
            text_vostok2en_component_1.TextVostok2EnComponent,
            text_vostok3en_component_1.TextVostok3EnComponent,
            text_vostok4en_component_1.TextVostok4EnComponent,
            text_biegnacyczlowiek_component_1.TextBiegnacyczlowiekComponent,
            text_wszystkozernosc_component_1.TextWszystkozernoscComponent,
            text_cmy_component_1.TextCmyComponent,
            text_moths_component_1.TextMothsComponent,
            text_obrovsky_component_1.TextObrovskyComponent,
            text_obrovskyen_component_1.TextObrovskyEnComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            dropdown_1.BsDropdownModule.forRoot(),
            app_routing_1.routing
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
