import {Injectable} from '@angular/core';

@Injectable()
export class EventService {
	constructor() {
		this.events = [];
	}

	createEvent(event) {
		this.events.push(event);
	}

	editEvent(event) {
	}

	removeEvent(event) {
	}

	getEventsForSchedule(id) {

	}
}