import 'babel-polyfill';
import 'zone.js/dist/zone';

import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {FORM_PROVIDERS, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ScheduleManagementApp} from './app';

bootstrap(ScheduleManagementApp, [
	ROUTER_PROVIDERS,
	FORM_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => window.console.error(err));