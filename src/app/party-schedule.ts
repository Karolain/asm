import { PartyLocation } from './party-location';
import { PartyEvent } from './party-event';

export interface PartySchedule {
    key: string;
    name: string;
    website?: string;
    description?: string;
    startsAt: Date;
    endsAt: Date;
    active: boolean;
    events: PartyEvent[];
    locations: PartyLocation[];
}
