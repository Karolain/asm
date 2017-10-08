import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  _get(resource): Promise<any> {
    return this.http.get(`${environment.apiUrl}/${resource}`).toPromise().then(response => response);
  }

  getParty(partyName: string): Promise<any> {
    return this._get(`parties/${partyName}`)
  }

  getParties(): Promise<any> {
    return this._get('parties');
  }

  async getPartyData(partyName: string): Promise<any> {
    const party = await this.getParty(partyName);
    party.events = await this.getEvents(partyName);
    party.locations = await this.getLocations(partyName);
    return party;
  }

  getEvents(partyName: string): Promise<any> {
    return this._get(`events/${partyName}`);
  }

  getLocations(partyName: string): Promise<any> {
    return this._get(`locations/${partyName}`);
  }

  getEventsForDefault() {
    return this._get(`events/${environment.defaultParty}`);
  }

}