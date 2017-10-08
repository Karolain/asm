import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PartySchedule } from '../party-schedule';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  schedules: Promise<PartySchedule[]>;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.schedules = this.api.getParties();
  }

  getStatus(isActive: boolean) {
    return isActive ? "Published" : "Unpublished";
  }

  onShareSchedule(schedule: PartySchedule) {

  }
}
