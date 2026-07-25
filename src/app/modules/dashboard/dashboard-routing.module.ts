import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { RoleGuard } from '@core/guards/role.guard'; // Adjust path if needed
import { PageNotFoundComponent } from '@modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'owner',
    component: DashboardComponent,
    canActivate: [RoleGuard],
    data: { roles: ['owner'] },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
