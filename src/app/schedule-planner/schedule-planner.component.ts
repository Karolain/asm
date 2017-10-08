import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PartySchedule } from '../party-schedule';

@Component({
  selector: 'app-schedule-planner',
  templateUrl: './schedule-planner.component.html',
  styleUrls: ['./schedule-planner.component.scss']
})
export class SchedulePlannerComponent implements OnInit {
  schedule: PartySchedule;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { schedule: PartySchedule }) => {
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
}
