import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { RoleGuard } from '@core/guards/role.guard'; // Adjust path if needed

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
