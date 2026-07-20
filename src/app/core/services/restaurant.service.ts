import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RestaurantList } from '@shared/models/restaurant.models';

@Injectable()
export class RestaurantService {
  dataPath = 'assets/data/restaurant.json';

  constructor(private readonly http: HttpClient) {}

  getRestaurantData(): Observable<RestaurantList[]> {
    return this.http
      .get<{ restaurantDetails: RestaurantList[] }>(this.dataPath)
      .pipe(map(data => data.restaurantDetails));
  }
}
