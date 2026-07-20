export interface CardDetails {
  name: string;
  count: string | number;
  avatar?: string;
  subName?: string;
  show: ('admin' | 'owner')[];
}

export interface StatCardData {
  heading: string;
  count: string | number;
  icon: string;
  show: ('admin' | 'owner')[];
}

export type OrderStatus = 'Pending' | 'Accepted' | 'Rejected';

export interface OrderStatusChange {
  [key: string]: any;
  status: OrderStatus;
}

export interface ReportCardButton {
  label: string;
  icon?: string;
  variant: 'filled' | 'outlined';
  value: string;
}

export type columnType = 'text' | 'status' | 'actions';
export interface ColumnDetails {
  key: string;
  heading: string;
  type: columnType;
}

export interface OrderData {
  orderId: string;
  restaurantName: string;
  customerName: string;
  itemsOrdered: string;
  totalAmount: string;
  status: string;
}
