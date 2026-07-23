import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from '@modules/restaurant/restaurant-routing.module';
import { ListRestaurantComponent } from '@modules/restaurant/list-restaurant/list-restaurant.component';
import { RestaurantFormComponent } from '@modules/restaurant/restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [ListRestaurantComponent, RestaurantFormComponent],
  imports: [CommonModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
