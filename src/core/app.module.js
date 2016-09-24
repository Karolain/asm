import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from 'ng2-translate/ng2-translate';

import {routes} from './app.routes';
import {CORE_PROVIDERS, CORE_DECLARATIONS, AppComponent} from './index';
import {AUTH_PROVIDERS, AUTH_DECLARATIONS} from '../auth';

@NgModule({
    declarations: [
        CORE_DECLARATIONS,
        AUTH_DECLARATIONS,
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    providers: [
        CORE_PROVIDERS, AUTH_PROVIDERS, POSTS_PROVIDERS,
        {provide: 'ENVIRONMENT', useValue: ENVIRONMENT}
    ],
    bootstrap: [AppComponent]
})
class AppModule {
}

