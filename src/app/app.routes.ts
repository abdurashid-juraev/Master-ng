import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-layout',
    pathMatch: 'full',
  },
  {
    path: 'auth-layout',
    loadComponent: () => import('./core/auth/pages/layout/auth-layout'),
  },
];
