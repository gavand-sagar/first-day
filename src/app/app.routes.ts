import { Component } from '@angular/core';
import { Routes } from '@angular/router';
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
