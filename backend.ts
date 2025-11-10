export type UserRole = 'admin' | 'veterinario' | 'enfermero' | 'recepcionista';

export interface User {
  id: number;
  name: string;
  email: string;
  roles: UserRole[];
}

export const users: User[] = [
  {
    id: 1,
    name: 'Dr. Admin Veterinario',
    roles: ['admin'],
    email: 'admin@petcare.com',
  },
  {
    id: 2,
    name: 'Dr. María González',
    roles: ['veterinario'],
    email: 'maria@petcare.com',
  },
  {
    id: 3,
    name: 'Dr. Carlos Rodríguez',
    roles: ['veterinario'],
    email: 'carlos@petcare.com',
  },
  {
    id: 4,
    name: 'Ana López - Enfermera',
    roles: ['enfermero'],
    email: 'ana@petcare.com',
  },
  {
    id: 5,
    name: 'Luis Morales - Recepción',
    roles: ['recepcionista'],
    email: 'luis@petcare.com',
  }
];
