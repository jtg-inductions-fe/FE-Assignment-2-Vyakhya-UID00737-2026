export interface CardDetails {
  name: string;
  price: string | number;
  avatar?: string;
  email?: string;
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
  value?: string;
}

export type columnType = 'text' | 'status' | 'actions';
export interface columnDetails {
  key: string;
  heading: string;
  type: columnType;
  width: string;
}
