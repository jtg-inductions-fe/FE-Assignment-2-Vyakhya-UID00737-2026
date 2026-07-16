import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [ListRestaurantComponent, RestaurantFormComponent],
  imports: [CommonModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
