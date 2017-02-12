import {Injectable} from '@angular/core';

@Injectable()
export class ScheduleService {
    constructor() {}

    getSchedules() {
        return Promise.resolve([{id: 1, name: 'asd'}]);
    }
}
