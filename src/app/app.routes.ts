import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  // 🔵 Rutas públicas primero
  {
    path: 'login',
    loadComponent: () => import('./auth/login').then(m => m.default),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register').then(m => m.default),
  },

  // 🔵 Redirección de rutas antiguas
  {
    path: 'auth/login',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🟢 Rutas PRIVADAS (intranet)
  {
    path: 'intranet',
    canMatch: [authGuard],
    loadComponent: () => import('./modules/inner/pages/page-layout'),
    loadChildren: () => import('./modules/inner/pages/page.routes'),
  },

  // 🟠 Layout público (NO debe estar antes)
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    loadChildren: () => import('./modules/outer/pages/pages.routes').then(m => m.routes),
  },

  // ❗ fallback 404 opcional
  { path: '**', redirectTo: 'login' }
];
