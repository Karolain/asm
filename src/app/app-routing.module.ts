import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: '**',    component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}