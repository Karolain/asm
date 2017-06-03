import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Schedule } from "./schedule";
import { ScheduleService } from "./schedule.service";

@Injectable()
export class ScheduleResolver implements Resolve<Schedule> {
  constructor(private ss: ScheduleService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Schedule> {
    let id = route.params['id'];
    return this.ss.getSchedule(id).then((schedule: Schedule) => {
      if (schedule) {
        return schedule;
      } else {
        this.router.navigate(['/schedules']);
        return null;
      }
    });
  }
}