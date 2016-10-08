import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event/event.service';
import { LocationComponent } from './components/event/location.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleListComponent } from './components/schedule/schedule-list.component';

export { AppComponent, EventService };
export const CORE_PROVIDERS = [
    LoggedInGuard,
    LoggedOutGuard,
    EventService
];
export const CORE_DECLARATIONS = [
    AboutComponent,
    MenuComponent,
    AppComponent,
    EventComponent,
    LocationComponent,
    ScheduleComponent,
    ScheduleListComponent
];
