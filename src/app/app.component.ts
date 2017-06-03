import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'asm-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  template: `
    <nav>
      <a [routerLink]="'home'" routerLinkActive="active">Home</a>
      <a [routerLink]="'schedules'" routerLinkActive="active">Schedules</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {}

  public ngOnInit() {
    console.log('Initial App State');
  }

}
