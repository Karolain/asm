import {Component} from '@angular/core';
import {EventService} from '../../index';

@Component({
    selector: 'asm-event',
    template: require('./event.template.html')
})
export class EventComponent {

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