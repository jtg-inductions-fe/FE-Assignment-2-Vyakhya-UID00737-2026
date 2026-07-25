import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '@core/services/restaurant.service';
import { RestaurantList } from '@shared/models/restaurant.models';
import { Router } from '@angular/router';
import { catchError, tap, Observable } from 'rxjs';
import { addRestaurant, editRestaurant } from '@shared/constants/path.constants';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.scss'],
})
export class ListRestaurantComponent implements OnInit {
  restaurantData$!: Observable<RestaurantList[]>;
  displayedColumns: string[] = ['restaurantName', 'address', 'owners', 'actions'];
  isLoading = true;
  error = '';

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
  ) {}

  ngOnInit(): void {
    this.restaurantData$ = this.restaurantService.getRestaurantData().pipe(
      tap(() => {
        this.isLoading = false;
      }),
      catchError(() => {
        this.error = 'Unable to load restaurant data!';
        this.isLoading = false;
        return [];
      }),
    );
  }

  onAddClick(): void {
    this.router.navigate([addRestaurant]);
  }

  onEditClick(id: string): void {
    this.router.navigate([editRestaurant, id]);
  }
}
