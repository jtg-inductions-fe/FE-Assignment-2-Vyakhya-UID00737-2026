import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantRoutingModule } from '@modules/restaurant/restaurant-routing.module';
import { ListRestaurantComponent } from '@modules/restaurant/list-restaurant/list-restaurant.component';
import { RestaurantFormComponent } from '@modules/restaurant/restaurant-form/restaurant-form.component';
import { SharedModule } from '@shared/shared.module';
import { RestaurantService } from '@core/services/restaurant.service';

@NgModule({
  declarations: [ListRestaurantComponent, RestaurantFormComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    MatTableModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [RestaurantService],
})
export class RestaurantModule {}
