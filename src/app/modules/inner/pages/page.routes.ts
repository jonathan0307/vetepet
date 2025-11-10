import { Routes } from '@angular/router';
import { hasRoleGuard } from '../../../core/guards/has-role.guard'; // Roles based guard


export default [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard'), // public
  },
  {
    path: 'orders',
    canActivate: [hasRoleGuard(['veterinario', 'admin'])],
    loadComponent: () => import('./orders/orders'), // veterinario
  },
  {
    path: 'reports',
    canActivate: [hasRoleGuard(['veterinario', 'admin'])],
    loadComponent: () => import('./reports/reports'),
    
  },
  {
    path: 'admin',
    canActivate: [hasRoleGuard(['admin'])],
    loadComponent: () => import('./admin/admin'), // admin
  },
] as Routes;

