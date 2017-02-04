import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@angular/material";
import {ScheduleListComponent} from "./schedule-list.component";
import {ScheduleRoutingModule} from "./schedule-routing.module";
import {ScheduleService} from "./schedule.service";

@NgModule({
    imports: [
        CommonModule,
        ScheduleRoutingModule,
        MaterialModule.forRoot(),
    ],
    exports: [
    ],
    declarations: [ScheduleListComponent],
    providers: [
        ScheduleService
    ]
})
export class ScheduleModule {
}