import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { ScheduleResolverService } from './schedule-resolver.service';
import { SchedulePlannerComponent } from './schedule-planner/schedule-planner.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'schedules', children: [
      {
          path: '', 
          component: ScheduleListComponent
      },
      {
          path: ':id', 
          component: SchedulePlannerComponent,
          resolve: {
            schedule: ScheduleResolverService
          }
      }
  ]},
  { path: '**',    component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}