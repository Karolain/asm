import { EventLocation } from "./event/location/location";
import { Event } from "./event/event";

export interface Schedule {
    id: number;
    name: string;
    status: ScheduleStatus;
    events: Event[];
    locations: EventLocation[];
}

export const enum ScheduleStatus {
    Draft,
    Published,
    Closed
}