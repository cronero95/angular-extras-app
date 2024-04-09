import { Routes } from '@angular/router';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection-page/change-detection-page.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow-page/control-flow-page.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options-page/defer-options-page.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views-page/defer-views-page.component'),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () => import('./dashboard/pages/user-page/user-page.component'),
      },
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () => import('./dashboard/pages/users-page/users-page.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transition-page/view-transition-page.component'),
      },
      {
        path: '**',
        redirectTo: 'change-detection',
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];
