import {Routes, Route, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';
import {Component} from '@angular/core';

import {ScheduleService} from './services/scheduleService'

@Component({
	selector: 'asm-app',
	templateUrl: './app.html',
	viewProviders: [ScheduleService],
	directives: [
		ROUTER_DIRECTIVES
	]
})
@Routes([
	new Route({path: '/', component: ScheduleManagementApp})
])
export class ScheduleManagementApp {

}