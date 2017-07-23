import { Injectable } from '@angular/core';
import { EventLocation } from "./event/location/location";
import { Event } from "./event/event";

@Injectable()
export class ScheduleService {
    private schedules = [
        {
            key: 'asmw17', 
            name: 'Assembly Winter 2017', 
            active: true,
            startsAt: new Date(2017, 1, 3, 10),
            endsAt: new Date(2017, 1, 5, 16),
            events: [] as Event[],
            locations: [] as EventLocation[]
        },
        { 
            key: 'asms17', 
            name: 'Assembly Summer 2017', 
            description: 'The best event of the year',
            status: false,
            startsAt: new Date(2017, 7, 3, 10),
            endsAt: new Date(2017, 7, 6, 16),
            events: [] as Event[],
            locations: [
                {
                    key: "main_state",
                    name: "Main Stage"
                },
                {
                    key: "csgo_stage",
                    name: "CSGO Stage"
                }
            ] as EventLocation[]
        }
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
