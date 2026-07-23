import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '@modules/dashboard/dashboard.component';
import { DashboardRoutingModule } from '@modules/dashboard/dashboard-routing.module';
import { FooterCardComponent } from '@modules/dashboard/footer-card/footer-card.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, FooterCardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  exports: [FooterCardComponent],
})
export class DashboardModule {}
