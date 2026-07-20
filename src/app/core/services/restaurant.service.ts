import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { RestaurantList } from '@shared/models/restaurant.models';

@Injectable()
export class RestaurantService {
  dataPath = 'assets/data/restaurant.json';
  restaurantSubject = new BehaviorSubject<RestaurantList[]>([]);

  constructor(private readonly http: HttpClient) {}

  loadData(): void {
    this.http
      .get<{ restaurantDetails: RestaurantList[] }>(this.dataPath)
      .pipe(map(data => data.restaurantDetails))
      .subscribe(data => this.restaurantSubject.next(data));
  }

  getRestaurantData(): Observable<RestaurantList[]> {
    if (this.restaurantSubject.value.length === 0) {
      this.loadData();
    }

    return this.restaurantSubject.asObservable();
  }

  addRestaurantData(newRestaurant: Omit<RestaurantList, 'id'>): void {
    const curList = this.restaurantSubject.value;
    const newId = (curList.length + 1).toString();
    const restaurant: RestaurantList = {
      ...newRestaurant,
      id: newId,
    };
    this.restaurantSubject.next([...curList, restaurant]);
  }

  updateRestaurantData(updateRestaurant: RestaurantList): void {
    const curList = this.restaurantSubject.value;
    const updateList = curList.map(item => (item.id === updateRestaurant.id ? updateRestaurant : item));
    this.restaurantSubject.next(updateList);
  }

  getRestaurantById(id: string): Observable<RestaurantList | undefined> {
    return this.getRestaurantData().pipe(map(restaurants => restaurants.find(item => item.id === id)));
  }
}
