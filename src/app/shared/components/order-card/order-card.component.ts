import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderStatus, OrderStatusChange, columnDetails } from '../../models/card.models';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  @Input() heading = '';
  @Input() description = '';
  @Input() orders: Record<string, any>[] = [];
  columnsValue: columnDetails[] = [];
  displayColumns: string[] = [];
  @Input() set columns(value: columnDetails[]) {
    this.columnsValue = value;
    this.displayColumns = value.map((_, idx) => 'col_' + idx);
  }

  get columns(): columnDetails[] {
    return this.columnsValue;
  }

  @Output() statusChange = new EventEmitter<OrderStatusChange>();

  getCellValue(row: any, colIndex: number): any {
    const keys = Object.keys(row);
    const targetKey = keys[colIndex];
    return targetKey ? row[targetKey] : '';
  }

  acceptOrder(selectedOrder: any): void {
    this.updateOrderStatus(selectedOrder, 'Accepted');
  }

  rejectOrder(selectedOrder: any): void {
    this.updateOrderStatus(selectedOrder, 'Rejected');
  }

  private updateOrderStatus(selectedOrder: any, status: OrderStatus): void {
    const key = Object.keys(selectedOrder)[0];
    if (!key) return;

    const orderToUpdate = this.orders.find(order => order[key] === selectedOrder[key]);
    if (!orderToUpdate) return;
    const statusidx = this.columns.findIndex(col => col.type === 'status');
    const statusKey = Object.keys(orderToUpdate)[statusidx];
    if (statusKey) {
      orderToUpdate[statusKey] = status;
    }

    this.statusChange.emit({
      order: orderToUpdate,
      status,
    });
  }
}
