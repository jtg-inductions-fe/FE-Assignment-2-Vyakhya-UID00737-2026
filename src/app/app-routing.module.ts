import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@modules/page-not-found/page-not-found.component';
import { RoleGuard } from '@core/guards/role.guard';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule),
  },
  {
    path: 'restaurants',
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
    loadChildren: () => import('./modules/restaurant/restaurant.module').then(module => module.RestaurantModule),
  },
  {
    path: 'dashboard',
    canActivate: [RoleGuard],
    data: { roles: ['admin', 'owner'] },
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule),
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
