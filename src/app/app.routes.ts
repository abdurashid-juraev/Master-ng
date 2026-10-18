import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-layout',
    pathMatch: 'full',
  },
  {
    path: 'auth-layout',
    loadComponent: () => import('./core/auth/layout/auth-layout'),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home'),
  },
];
