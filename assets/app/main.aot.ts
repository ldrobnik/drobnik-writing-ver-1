import './polyfills';
import { platformBrowser } from "@angular/platform-browser";
import { enableProdMode } from "@angular/core";

import { AppModuleNgFactory } from './app.module.ngfactory'; // file created during the build process

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);