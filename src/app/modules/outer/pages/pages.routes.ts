import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { DirectivesComponent } from './directives/directives.component';
import { TablesComponent } from './tables/tables.component';
import { ViewCardComponent } from '../components/view-card/view-card.component';
import { ModalComponent } from '../components/modal/modal.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'login', 
    loadComponent: () => import('../../../auth/login').then(m => m.default)
  },
  { path: 'servicios', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:category/:id', component: ProductDetailsComponent },
  { path: 'servicio/:category/:id', component: ProductDetailsComponent },
  { path: 'informacion', redirectTo: 'directives', pathMatch: 'full' },
  { path: 'directives', component: DirectivesComponent},
  { path: 'historial-medico', redirectTo: 'tables', pathMatch: 'full' },
  { path: 'tables', component: TablesComponent},
  { path: 'tables/view-customer/:customerId', component: ViewCardComponent},
  { path: 'tables/add-user', component: ModalComponent},
  { path: 'tables/edit-user/:id', component: TablesComponent},
  { path: 'clientes-mascotas', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent}
]



