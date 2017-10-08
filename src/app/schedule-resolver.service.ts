import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PartySchedule } from "./party-schedule";
import { ApiService } from './api.service';

@Injectable()
export class ScheduleResolverService implements Resolve<PartySchedule> {

  constructor(private router: Router, private api: ApiService) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PartySchedule> {
    let id: string = route.paramMap.get('id');

    if (id) {
      let party = await this.api.getPartyData(id);
      if (party) {
        return party;
      } else {
        this.router.navigate(['/schedules']);
      }
    } else {
      return this.api.getParties();
    }
  }

}
