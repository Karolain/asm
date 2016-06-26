import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {EventService} from './services/eventService';
@Component({
	selector: 'asm-app',
	templateUrl: './app.html',
	viewProviders: [EventService],
	directives: [ROUTER_DIRECTIVES]
})

export class ScheduleManagementApp {
	constructor() {

	}
}