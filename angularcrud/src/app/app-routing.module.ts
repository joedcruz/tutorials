import { RegistereduserDetailComponent } from './registereduser-detail/registereduser-detail.component';
import { RegisteredusersComponent } from './registeredusers/registeredusers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RegistereduserDetailComponent },
  { path: 'registeredusers', component: RegisteredusersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
