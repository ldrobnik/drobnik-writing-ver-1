"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfills");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); // imports a library for using Angular in a web browser with JIT compilation
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule); //starts the application
