import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { roleGuard } from './core/guards/role.guard';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        module => module.AuthModule
      )
  },
  {
    path: 'restaurants',
    canActivate: [roleGuard],
    data: { roles: ['admin'] },
    loadChildren: () =>
      import('./modules/restaurant/restaurant.module').then(
        module => module.RestaurantModule
      )
  },
  {
    path: 'dashboard/admin',
    component: DashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'dashboard/owner',
    component: DashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['owner'] }
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
