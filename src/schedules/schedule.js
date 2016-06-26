import {Component, Input} from '@angular/core';
import {Event} from '../event/event';
import {EventService} from '../services/eventService';


@Component({
	selector: 'asm-schedule',
	templateUrl: './schedules/schedule.html',
	directives: [Event]
})
export class Schedule {
	@Input() scheduleId;

	constructor(eventService: EventService) {
		this.eventService = eventService;
	}

	ngOnInit() {
		this.events = this.eventService.getEventsForSchedule(this.scheduleId);
	}
}