import { Component, EventEmitter, Input, Output } from '@angular/core';

export type OrderStatus = 'Pending' | 'Accepted' | 'Rejected';

export interface OrderDetails {
  order: string;
  restraunt: string;
  customer: string;
  items: string;
  amount: string | number;
  status: OrderStatus;
}

export interface OrderStatusChange {
  order: OrderDetails;
  status: OrderStatus;
}

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  @Input() heading = '';
  @Input() description = '';
  @Input() orders: OrderDetails[] = [];

  @Output() statusChange = new EventEmitter<OrderStatusChange>();

  displayedColumns: string[] = [
    'order',
    'restraunt',
    'customer',
    'items',
    'amount',
    'status',
    'actions'
  ];

  acceptOrder(selectedOrder: OrderDetails): void {
    this.updateOrderStatus(selectedOrder, 'Accepted');
  }

  rejectOrder(selectedOrder: OrderDetails): void {
    this.updateOrderStatus(selectedOrder, 'Rejected');
  }

  private updateOrderStatus(selectedOrder: OrderDetails, status: OrderStatus): void {
    const orderToUpdate = this.orders.find(
      (order) => order.order === selectedOrder.order
    );

    if (!orderToUpdate) {
      return;
    }

    orderToUpdate.status = status;
    this.statusChange.emit({
      order: orderToUpdate,
      status
    });
  }
}