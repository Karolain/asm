import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {AppService} from "./app.service";
import {ScheduleModule} from "./schedule/schedule.module";
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
        ScheduleModule,
        AppRoutingModule,
        MaterialModule.forRoot()
    ],
    providers: [
        AppService
    ]
})
export class AppModule {
}
