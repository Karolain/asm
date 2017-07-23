import { Injectable } from '@angular/core';
import { EventLocation } from "./event/location/location";
import { Event } from "./event/event";
import {Schedule} from "./schedule";

/*

    key: string;
    name: string;
    website: string;
    startsAt: Date;
    endsAt: Date;
    active: boolean;
    events: Event[];
    locations: EventLocation[];
 */

@Injectable()
export class ScheduleService {
    private schedules: Schedule[] = [
        {
            key: 'asmw17',
            name: 'Assembly Winter 2017',
            active: true,
            startsAt: new Date(2017, 1, 3, 10),
            endsAt: new Date(2017, 1, 5, 16),
            events: [] as Event[],
            locations: [] as EventLocation[]
        } as Schedule,
        {
            key: 'asms17',
            name: 'Assembly Summer 2017',
            description: 'The best event of the year',
            active: false,
            startsAt: new Date(2017, 7, 3, 10),
            endsAt: new Date(2017, 7, 6, 16),
            events: [] as Event[],
            locations: [
                {
                    key: "main_state",
                    name: "Main Stage"
                } as EventLocation,
                {
                    key: "csgo_stage",
                    name: "CSGO Stage"
                } as EventLocation
            ] as EventLocation[]
        } as Schedule
    ];

    constructor() { }

    getSchedules() {
        return Promise.resolve(this.schedules);
    }

    getSchedule(key: string) {
        let schedule = this.schedules.find(s => s.key === key);
        return Promise.resolve(schedule);
    }
}
