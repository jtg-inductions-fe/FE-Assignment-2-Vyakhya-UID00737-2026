import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CardDetails, ColumnDetails, OrderData, ReportCardButton, StatCardData } from '@shared/models/card.models';
import { SocialIcons } from '@shared/models/footer.models';
import { DropdownOptions } from '@shared/models/dropdown.models';

@Injectable()
export class DashboardService {
  dataPath = 'assets/data/dashboard.json';

  constructor(private readonly http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getStatData(): Observable<StatCardData[]> {
    return this.http.get<{ statData: StatCardData[] }>(this.dataPath).pipe(
      map(data => data.statData),
      catchError(this.handleError),
    );
  }

  getButtonDetails(): Observable<ReportCardButton[]> {
    return this.http.get<{ cardButtonData: ReportCardButton[] }>(this.dataPath).pipe(
      map(data => data.cardButtonData),
      catchError(this.handleError),
    );
  }
  getActiveOrderDetails(): Observable<OrderData[]> {
    return this.http.get<{ activeOrdersData: OrderData[] }>(this.dataPath).pipe(
      map(data => data.activeOrdersData),
      catchError(this.handleError),
    );
  }
  getCustomerDetails(): Observable<CardDetails[]> {
    return this.http.get<{ customersData: CardDetails[] }>(this.dataPath).pipe(
      map(data => data.customersData),
      catchError(this.handleError),
    );
  }
  getDishDetails(): Observable<CardDetails[]> {
    return this.http.get<{ dishData: CardDetails[] }>(this.dataPath).pipe(
      map(data => data.dishData),
      catchError(this.handleError),
    );
  }
  getColumnDetails(): Observable<ColumnDetails[]> {
    return this.http.get<{ orderColumns: ColumnDetails[] }>(this.dataPath).pipe(
      map(data => data.orderColumns),
      catchError(this.handleError),
    );
  }
  getIcons(): Observable<SocialIcons[]> {
    return this.http.get<{ socialIcon: SocialIcons[] }>(this.dataPath).pipe(
      map(data => data.socialIcon),
      catchError(this.handleError),
    );
  }
  getRestaurantDetails(): Observable<DropdownOptions[]> {
    return this.http.get<{ restaurantData: DropdownOptions[] }>(this.dataPath).pipe(
      map(data => data.restaurantData),
      catchError(this.handleError),
    );
  }
}
