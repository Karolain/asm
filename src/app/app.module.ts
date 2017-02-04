import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';

import {AppRoutingModule} from './app-routin.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {AppService} from "./app.service";
import {ScheduleModule} from "./schedule/schedule.module";
import {ScheduleService} from "./schedule/schedule.service";

import '../main.scss';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule.forRoot(),
        ScheduleModule
    ],
    providers: [
        AppService,
        ScheduleService
    ]
})
export class AppModule {
}
