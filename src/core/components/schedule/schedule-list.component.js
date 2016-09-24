import {Component} from '@angular/core';

@Component({
	selector: 'asm-schedule-list',
	templateUrl: './core/components/schedule/schedule-list.template.html'
})
export class ScheduleListComponent {

	constructor() {
		this.schedules = [];
	}
}