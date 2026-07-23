import { SidebarOptions } from '../models/sidebar.models';

export const sidebar_width = '768px';

export const SIDEBAR_CONTENT: SidebarOptions[] = [
  {
    label: 'Overview',
    icon: 'icon-overview',
    type: 'link',
    show: ['admin', 'owner'],
  },
  {
    label: 'Restaurants',
    icon: 'icon-cook',
    type: 'link',
    show: ['admin'],
    route: '/restaurants/list',
  },
  {
    label: 'Menu',
    icon: 'icon-cook-tool',
    type: 'link',
    show: ['owner'],
  },
  {
    label: 'Billing history',
    icon: 'icon-save-file',
    type: 'accordion',
    show: ['owner'],
    children: [
      {
        label: 'Payment history',
        icon: 'icon-profile',
        type: 'link',
        show: ['owner'],
      },
      {
        label: 'Transactions',
        icon: 'icon-access',
        type: 'link',
        show: ['owner'],
      },
    ],
  },
  {
    label: 'Inventory',
    icon: 'icon-bag',
    type: 'accordion',
    show: ['owner'],
    children: [
      {
        label: 'Stock Overview',
        icon: 'icon-graph',
        type: 'link',
        show: ['owner'],
      },
      {
        label: 'Ingredients',
        icon: 'icon-cook',
        type: 'link',
        show: ['owner'],
      },
    ],
  },
  {
    label: 'Messages',
    icon: 'icon-message',
    type: 'link',
    show: ['admin', 'owner'],
  },
  {
    label: 'Access',
    icon: 'icon-access',
    type: 'accordion',
    show: ['admin'],
    children: [
      {
        label: 'Permissions',
        icon: 'icon-settings',
        type: 'link',
        show: ['admin'],
      },
      {
        label: 'System Reports',
        icon: 'icon-save-file',
        type: 'link',
        show: ['admin'],
      },
    ],
  },
  {
    label: 'Access',
    icon: 'icon-access',
    type: 'link',
    show: ['owner'],
  },
];

export const COMMON_SIDEBAR_OPTIONS: SidebarOptions[] = [
  {
    label: 'My Profile',
    icon: 'icon-profile',
    type: 'link',
    show: ['admin', 'owner'],
  },
  {
    label: 'Gallery',
    icon: 'icon-gallery',
    type: 'link',
    show: ['admin', 'owner'],
  },
  {
    label: 'Help',
    icon: 'icon-help',
    type: 'link',
    show: ['admin', 'owner'],
  },
];
