import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AddRestrauntComponent } from './features/restraunts/add-restraunt/add-restraunt.component';
import { EditRestrauntComponent } from './features/restraunts/edit-restraunt/edit-restraunt.component';
import { ListRestrauntComponent } from './features/restraunts/list-restraunt/list-restraunt.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'restraunts',
    component: ListRestrauntComponent,
  },
  {
    path:'restraunts/add',
    component: AddRestrauntComponent,
  },
  {
    path:'restraunts/edit/:id',
    component: EditRestrauntComponent,
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
