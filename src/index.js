import 'babel-polyfill';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic';

import {ScheduleManagementApp} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';


bootstrap(ScheduleManagementApp, [
	APP_ROUTER_PROVIDERS
]).catch(err => window.console.error(err));