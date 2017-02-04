import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">
        Index
      </a>
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
