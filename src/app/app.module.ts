import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {AppService} from "./app.service";

import '../main.scss';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        AppService
    ]
})
export class AppModule {
}
