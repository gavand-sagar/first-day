import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {
    path: 'sidebar',
    loadComponent: () => import("./sidebar/sidebar.component").then(x => x.SidebarComponent)
  },
  {
    path: 'header',
    loadComponent: () => import("./header/header.component").then(x => x.HeaderComponent)
  },
  {
    path: 'order',
    loadChildren: () => import('./orders/orders.module').then(x => x.OrdersModule)
  }

  // {
  //   path: 'sidebar',
  //   component: SidebarComponent
  // },
  // {
  //   path: 'header',
  //   component: HeaderComponent
  // }
];
