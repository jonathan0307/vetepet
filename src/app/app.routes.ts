import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then(m => m.default),
  },
  {
    path: 'auth/login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    loadChildren: () => import('./modules/outer/pages/pages.routes').then(m => m.routes),
  },
  {
    canMatch: [authGuard],
    path: 'intranet',
    loadComponent: () => import('./modules/inner/pages/page-layout'),
    loadChildren: () => import('./modules/inner/pages/page.routes'),
  }
];


