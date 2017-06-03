import { Injectable } from '@angular/core';
import { EventLocation } from "./event/location/location";
import { Event } from "./event/event";

@Injectable()
export class ScheduleService {
    private schedules = [
        {
            id: 0, 
            name: 'Assembly Winter 2017', 
            status: 2,
            events: [] as Event[],
            locations: [] as EventLocation[]
        },
        { 
            id: 1, 
            name: 'Assembly Summer 2017', 
            status: 0,
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

    getSchedule(id: number) {
        return Promise.resolve(this.schedules[id]);
    }
}
