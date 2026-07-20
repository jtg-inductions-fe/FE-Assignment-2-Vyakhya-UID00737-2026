import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { DashboardService } from '@core/services/dashboard.service';
import { map, Observable } from 'rxjs';
import { CardDetails, ColumnDetails, OrderData, ReportCardButton, StatCardData } from '@shared/models/card.models';
import { SocialIcons } from '@shared/models/footer.models';
import { DropdownOptions } from '@shared/models/dropdown.models';
import { UserData } from '@shared/models/userdata.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentUser$!: Observable<UserData | null>;
  statDetails$!: Observable<StatCardData[]>;
  customerDetails$!: Observable<CardDetails[]>;
  dishDetails$!: Observable<CardDetails[]>;
  orderColumns$!: Observable<ColumnDetails[]>;
  buttonDetails$!: Observable<ReportCardButton[]>;
  activeOrderDetails$!: Observable<OrderData[]>;
  iconDetails$!: Observable<SocialIcons[]>;
  restaurantDetails$!: Observable<DropdownOptions[]>;

  selectedRestaurant = 'view all restaurant';

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
  ) {}

  get role(): 'admin' | 'owner' | null {
    return this.authService.getUserRole();
  }

  todayDate = new Date().getFullYear();

  ngOnInit(): void {
    this.currentUser$ = this.authService.currentUser$;
    const role = this.role;

    this.statDetails$ = this.dashboardService
      .getStatData()
      .pipe(map(items => items.filter(opt => (role ? opt.show.includes(role) : false))));

    this.customerDetails$ = this.dashboardService
      .getCustomerDetails()
      .pipe(map(items => items.filter(opt => (role ? opt.show.includes(role) : false))));

    this.dishDetails$ = this.dashboardService
      .getDishDetails()
      .pipe(map(items => items.filter(opt => (role ? opt.show.includes(role) : false))));

    this.orderColumns$ = this.dashboardService.getColumnDetails();
    this.buttonDetails$ = this.dashboardService.getButtonDetails();
    this.activeOrderDetails$ = this.dashboardService.getActiveOrderDetails();
    this.iconDetails$ = this.dashboardService.getIcons();
    this.restaurantDetails$ = this.dashboardService.getRestaurantDetails();
  }

  onRestaurantChange(value: string): void {
    this.selectedRestaurant = value;
    const role = this.role;
    this.dishDetails$ = this.dashboardService.getDishDetails().pipe(
      map(items =>
        items.filter(item => {
          const isVisibleForRole = role ? item.show.includes(role) : false;
          const isSelectedRestaurant =
            value === 'view all restaurant' || item.subName?.toLowerCase() === value.toLowerCase();
          return isVisibleForRole && isSelectedRestaurant;
        }),
      ),
    );
  }
}
