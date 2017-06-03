import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Schedule, ScheduleStatus } from "../schedule";

@Component({
    selector: 'asm-planner',
    templateUrl: './planner.component.html',
    styleUrls: ['./planner.component.scss']
})
export class SchedulePlannerComponent implements OnInit {
    schedule: Schedule;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.data.subscribe((data: { schedule: Schedule }) => {
            this.schedule = data.schedule;
        });
    }

    onEditDetails() {

    }

    onBackToList() {
        this.router.navigate(['/schedules']);
    }

    onAddNewEvent() {

    }

    onAddNewLocation() {

    }
    
    isEditable(schedule: Schedule) {
        return [ScheduleStatus.Draft, ScheduleStatus.Published].indexOf(schedule.status) !== -1;
    }
}