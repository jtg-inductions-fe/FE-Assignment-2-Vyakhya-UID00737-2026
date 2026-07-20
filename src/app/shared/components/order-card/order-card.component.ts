import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderStatus, OrderStatusChange, ColumnDetails } from '../../models/card.models';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  @Input() heading = '';
  @Input() description = '';
  @Input() orders: Record<string, any>[] = [];
  columnsValue: ColumnDetails[] = [];
  displayColumns: string[] = [];
  @Input() set columns(value: ColumnDetails[]) {
    this.columnsValue = value;
    this.displayColumns = value.map(col => col.key);
  }

  get columns(): ColumnDetails[] {
    return this.columnsValue;
  }

  @Output() statusChange = new EventEmitter<OrderStatusChange>();

  getCellValue(row: any, column: ColumnDetails): any {
    return row[column.key];
  }

  acceptOrder(selectedOrder: any): void {
    this.updateOrderStatus(selectedOrder, 'Accepted');
  }

  rejectOrder(selectedOrder: any): void {
    this.updateOrderStatus(selectedOrder, 'Rejected');
  }

  private updateOrderStatus(selectedOrder: any, status: OrderStatus): void {
    const statusKey = this.columns.find(col => col.type === 'status');
    if (statusKey) {
      selectedOrder[statusKey.key] = status;
    }

    this.statusChange.emit({
      order: selectedOrder,
      status,
    });
  }
}
