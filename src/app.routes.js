import {provideRouter, RouterConfig} from '@angular/router';

import {ScheduleList} from './schedules/scheduleList';
import {ScheduleImporter} from './import/import';
import {Dashboard} from './dashboard/dashboard';

export const routes = [
	{path: '', name: 'Dashboard', component: Dashboard},
	{path: 'schedules', name: 'Schedules', component: ScheduleList},
	{path: 'import', name: 'Import', component: ScheduleImporter}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];