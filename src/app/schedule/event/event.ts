import { EventCategory } from "./category/category";
import { EventFlag } from "./flag/flag";

export interface Event {
    location: string;
    name: string;
    name_fi: string;
    description: string;
    description_fi: string;
    url: string;
    stream_url: string;
    prep_start_time?: Date;
    start_time: Date;
    original_start_time: Date;
    end_time: Date;
    key: string;
    flags: EventFlag[];
    categories: EventCategory[];
}