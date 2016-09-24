import {ScheduleListComponent} from './components/schedule/schedule-list.component';
// import {ScheduleImporter} from '../import/import';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from '../auth/components/login/login.component';
import {LoggedInGuard} from './guards/logged-in.guard';
import {LoggedOutGuard} from './guards/logged-out.guard';

export const routes = [
    {path: '', name: 'Dashboard', component: DashboardComponent, canActivate: [LoggedOutGuard]},
    {path: 'schedule', name: 'Schedule', component: ScheduleListComponent, canActivate: [LoggedOutGuard]},
    // {path: 'import', name: 'Import', component: ScheduleImporter, canActivate: [LoggedOutGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent, canActivate: [LoggedOutGuard]}
];


