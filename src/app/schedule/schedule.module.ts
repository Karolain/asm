import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleListComponent} from "./schedule-list.component";
import {ScheduleRoutingModule} from "./schedule-routing.module";

@NgModule({
    imports: [CommonModule, ScheduleRoutingModule],
    declarations: [ScheduleListComponent],
    providers: []
})
export class ScheduleModule {
}