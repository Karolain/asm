import {Component, OnInit} from '@angular/core';
import { Schedule } from "./schedule";
import {ScheduleService} from "./schedule.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'asm-schedule-list',
    templateUrl: './schedule-list.component.html',
    styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
    schedules: Promise<Schedule[]>;

    constructor(
        private scheduleService: ScheduleService,
        private route: ActivatedRoute,
        private router: Router
        ) {}

    ngOnInit() {
        this.schedules = this.scheduleService.getSchedules();
    }

    getStatus(isActive: boolean) {
        return isActive ? "Published" : "Unpublished";
    }

    onEditSchedule(schedule: Schedule) {
        this.router.navigate([schedule.key], { relativeTo: this.route });
    }

    onShareSchedule(schedule: Schedule) {

    }
}
