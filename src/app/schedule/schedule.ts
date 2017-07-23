import { EventLocation } from "./event/location/location";
import { Event } from "./event/event";

export interface Schedule {
    key: string;
    name: string;
    website: string;
    startsAt: Date;
    endsAt: Date;
    active: boolean;
    events: Event[];
    locations: EventLocation[];
}