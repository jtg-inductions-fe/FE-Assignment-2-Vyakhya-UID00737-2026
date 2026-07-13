import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';

const routes: Routes = [
  {
    path: '',
    component: ListRestaurantComponent
  },
  {
    path: 'add',
    component: RestaurantFormComponent,
    data: {
      mode: 'add'
    }
  },
  {
    path: 'edit/:id',
    component: RestaurantFormComponent,
    data: {
      mode: 'edit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}
