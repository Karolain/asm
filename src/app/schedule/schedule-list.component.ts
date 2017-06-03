import {Component, OnInit} from '@angular/core';
import { Schedule, ScheduleStatus } from "./schedule";
import {ScheduleService} from "./schedule.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'asm-schedule-list',
    templateUrl: './schedule-list.component.html',
    styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
    schedules: Promise<Schedule[]>;
    statuses: string[] = ["Draft", "Published", "Closed" ];

    constructor(
        private scheduleService: ScheduleService,
        private route: ActivatedRoute,
        private router: Router
        ) {}

    ngOnInit() {
        this.schedules = this.scheduleService.getSchedules();
    }

    onEditSchedule(schedule: Schedule) {
        
        this.router.navigate([schedule.id], { relativeTo: this.route });
    }

    onShareSchedule(schedule: Schedule) {

    }
}
