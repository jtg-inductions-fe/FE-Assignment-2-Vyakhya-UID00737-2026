export interface SidebarOptions {
  label: string;
  icon: string;
  type: 'link' | 'accordion';
  show: ('admin' | 'owner')[];
  route?: string;
  children?: SidebarOptions[];
}
