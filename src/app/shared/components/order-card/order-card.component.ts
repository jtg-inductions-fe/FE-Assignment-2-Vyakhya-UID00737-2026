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
<<<<<<< HEAD
    this.columnsValue = value;
=======
>>>>>>> d6b83f7 (VN_A2_01: typography classes added)
    this.displayColumns = value.map(col => col.key);
  }

  get columns(): columnDetails[] {
    return this.columnsValue;
  }

  @Output() statusChange = new EventEmitter<OrderStatusChange>();

  getCellValue(row: any, column: columnDetails): any {
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
