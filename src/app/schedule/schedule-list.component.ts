import {Component, OnInit} from '@angular/core';
import {Schedule} from "./schedule";
import {ScheduleService} from "./schedule.service";

@Component({
    selector: 'schedule-list',
    templateUrl: './schedule-list.component.html'
})
export class ScheduleListComponent implements OnInit {
    schedules: Promise<Schedule[]>;

    constructor(private scheduleService: ScheduleService) {}

    ngOnInit() {
        this.schedules = this.scheduleService.getSchedules();
    }
}
