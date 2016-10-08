import {Component, Input} from '@angular/core';
import {EventService} from '../../services/event/event.service';


@Component({
	selector: 'asm-schedule',
	template: require('./schedule.template.html')
})
export class ScheduleComponent {
	@Input() scheduleId;

	constructor(eventService: EventService) {
		this.eventService = eventService;
	}

	ngOnInit() {
		this.events = this.eventService.getEventsForSchedule(this.scheduleId);
	}
}