import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // imports a library for using Angular in a web browser with JIT compilation

import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule); //starts the application