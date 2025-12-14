import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, of } from 'rxjs';
import { Customer } from '../../interfaces/interfaceCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'http://localhost:8080/customers';
  
  // Datos mock para desarrollo
  private mockCustomers: Customer[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
      phone: '555-0123',
      address: 'Calle Principal 123, Ciudad'
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria.garcia@email.com',
      phone: '555-0456',
      address: 'Av. Libertad 456, Ciudad'
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@email.com',
      phone: '555-0789',
      address: 'Plaza Central 789, Ciudad'
    }
  ];

  constructor(private http: HttpClient) { }

  // Obtener clientes (GET)
  getCustomers(): Observable<{ customers: Customer[] }> {
    // Usar datos mock en lugar del HTTP request
    return of({ customers: this.mockCustomers });
    
    // Para usar el backend real, descomenta la línea siguiente:
    // return this.http.get<any>(this.apiUrl);
  }

  // Crear un cliente (POST)
  createCustomer(customer: Customer): Observable<Customer> {
    // Simulación con datos mock
    const newId = Math.max(...this.mockCustomers.map(c => Number(c.id || 0))) + 1;
    const newCustomer = { ...customer, id: newId };
    this.mockCustomers.push(newCustomer);
    return of(newCustomer);
    
    // Para usar el backend real, descomenta el código siguiente:
    /*
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(
      this.apiUrl,
      customer,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error creating customer:', error);
        return throwError(() => new Error(
          error.error?.message ||
          'Failed to create customer. Please try again later.'
        ));
      })
    );
    */
  }

  // Actualizar un cliente existente (PUT)
  updateCustomer(customer: Customer): Observable<Customer> {
    // Simulación con datos mock
    const index = this.mockCustomers.findIndex(c => c.id === customer.id);
    if (index !== -1) {
      this.mockCustomers[index] = { ...customer };
      return of(this.mockCustomers[index]);
    } else {
      return throwError(() => new Error('Cliente no encontrado'));
    }
    
    // Para usar el backend real, descomenta el código siguiente:
    /*
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(
      `${this.apiUrl}/${customer.id}`,
      customer,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Error updating customer:', error);
        return throwError(() => new Error(
          error.error?.message ||
          'Failed to update customer. Please try again later.'
        ));
      })
    );
    */
  }

  // Eliminar un cliente (DELETE)
  deleteCustomer(customerId: number | string): Observable<Customer> {
    // Simulación con datos mock
    const index = this.mockCustomers.findIndex(c => c.id === customerId);
    if (index !== -1) {
      const deletedCustomer = this.mockCustomers.splice(index, 1)[0];
      return of(deletedCustomer);
    } else {
      return throwError(() => new Error('Cliente no encontrado'));
    }
    
    // Para usar el backend real, descomenta el código siguiente:
    /*
    return this.http.delete<any>(
      `${this.apiUrl}/${customerId}`
    ).pipe(
      catchError(error => {
        console.error('Error deleting customer:', error);
        return throwError(() => new Error(
          error.error?.message ||
          'Failed to delete customer. Please try again later.'
        ));
      })
    );
    */
  }


}
