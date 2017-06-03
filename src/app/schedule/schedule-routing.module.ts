import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScheduleListComponent} from "./schedule-list.component";
import { SchedulePlannerComponent } from "./planner/planner.component";
import { ScheduleResolver } from "./schedule-resolver.service";

const routes: Routes = [
    {path: 'schedules', children: [
        {
            path: '', 
            component: ScheduleListComponent
        },
        {
            path: ':id', 
            component: SchedulePlannerComponent,
            resolve: {
              schedule: ScheduleResolver
            }
        }
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        ScheduleResolver
    ]
})
export class ScheduleRoutingModule {
}