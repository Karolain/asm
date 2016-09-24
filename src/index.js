import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import {AppModule} from './core/app.module';

if (ENVIRONMENT === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);