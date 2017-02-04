import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScheduleListComponent} from "./schedule-list.component";

const routes: Routes = [
    {path: 'schedules', children: [
        {path: '', component: ScheduleListComponent},
        {path: ':id', component: ScheduleListComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule {
}