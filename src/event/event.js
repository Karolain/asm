import {Component} from '@angular/core';
import {Location} from './location';
import {EventService} from '../services/eventService';

@Component({
	selector: 'asm-event',
	templateUrl: './event/event.html',
	directives: [Location]
})
export class Event {

	constructor(eventService: EventService) {
		this.event = {
			id: null,
			title: {
				en: null,
				fi: null
			},
			description: {
				en: null,
				fi: null
			},
			url: null,
			organizerNotes: null,
			times: {
				prep: null,
				start: null,
				end: null,
				decons: null,
				originalStart: null,
				duration: null
			},
			location: null,
			category: null,
			published: false,
			cancelled: false,
			cancellationReason: null,
			tags: null,
			lastModified: {
				time: null,
				user: null
			},
			schedule: null
		};
	}
}