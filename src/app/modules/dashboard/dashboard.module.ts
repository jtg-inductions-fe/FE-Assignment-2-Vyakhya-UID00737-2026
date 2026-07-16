import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { FooterCardComponent } from '@modules/dashboard/footer-card/footer-card.component';

@NgModule({
  declarations: [DashboardComponent, FooterCardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
