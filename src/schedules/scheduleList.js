import {Component} from '@angular/core';
import {Schedule} from './schedule';


@Component({
	selector: 'asm-schedule-list',
	templateUrl: './schedules/scheduleList.html',
	directives: [Schedule]
})
export class ScheduleList {

	constructor() {
		this.schedules = [];
	}
}