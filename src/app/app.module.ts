import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { ScheduleResolverService } from './schedule-resolver.service';
import { SchedulePlannerComponent } from './schedule-planner/schedule-planner.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    SchedulePlannerComponent,
    ScheduleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    ScheduleResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
