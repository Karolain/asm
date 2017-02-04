import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ScheduleListComponent} from "./schedule-list.component";
import {ScheduleRoutingModule} from "./schedule-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ScheduleRoutingModule,
        MaterialModule.forRoot()
    ],
    declarations: [ScheduleListComponent],
    providers: []
})
export class ScheduleModule {
}