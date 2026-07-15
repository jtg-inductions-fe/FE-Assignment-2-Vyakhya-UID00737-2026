import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule),
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./modules/restaurant/restaurant.module').then(module => module.RestaurantModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
