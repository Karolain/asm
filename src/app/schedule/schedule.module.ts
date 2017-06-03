import {NgModule} from '@angular/core';
import {MdIconModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ScheduleListComponent} from "./schedule-list.component";
import {ScheduleRoutingModule} from "./schedule-routing.module";
import {ScheduleService} from "./schedule.service";
import { SchedulePlannerComponent } from "./planner/planner.component";

@NgModule({
    imports: [
        CommonModule,
        MdIconModule,
        ScheduleRoutingModule,
        MdListModule
    ],
    exports: [
    ],
    declarations: [
        ScheduleListComponent,
        SchedulePlannerComponent
    ],
    providers: [
        ScheduleService
    ]
})
export class ScheduleModule {
}