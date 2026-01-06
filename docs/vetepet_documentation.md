# Documentación del proyecto — Clínica Veterinaria PetCare (vetepet)

## Resumen

Proyecto: Clínica Veterinaria PetCare — Aplicación Angular con SSR y un conjunto de servicios para administración de clientes, productos, órdenes e historial médico.

Repositorio: https://github.com/jonathan0307/vetepet

> Nota: Si trabajas en un fork personal, usa la URL de tu fork (ej. https://github.com/sharon20-lgtm/vetepet).

---

## 1) Rutas principales y estructura de routing

El routing está dividido en rutas públicas (`outer`) y rutas privadas/intranet (`inner`). El archivo raíz es `src/app/app.routes.ts`.

- Rutas públicas (página principal, login, registro y catálogo):
  - `/` -> `layout.component` (carga el `outer` layout con rutas públicas)
  - `/login` -> componente de login (`src/app/auth/login`) (ruta pública)
  - `/register` -> componente de registro (`src/app/auth/register`) (ruta pública)
  - `/gallery` -> galería de servicios y productos
  - `/gallery/:category/:id` -> detalles del producto/servicio
  - `/directives` -> página informativa
  - `/tables` -> tablas / historial médico (páginas públicas y/o de visualización)
  - `/customers` -> listado de clientes y CRUD (página pública que usa mock data por defecto)

- Rutas privadas (intranet): definidas en `src/app/modules/inner/pages/page.routes.ts` y protegidas por `authGuard` y/o `hasRoleGuard`
  - `/intranet` -> layout del panel administrativo (**requiere autenticación** con `authGuard`) y carga child routes.
  - `/intranet` children:
    - `/intranet/` -> `dashboard` (acceso general, requiere login)
    - `/intranet/orders` -> `orders` (guarded por `hasRoleGuard(['veterinario','admin'])`)
    - `/intranet/reports` -> `reports` (guarded por `hasRoleGuard(['veterinario','admin'])`)
    - `/intranet/admin` -> `admin` (guarded por `hasRoleGuard(['admin'])`)

- Redirecciones y fallback:
  - `auth/login` redirige a `/login`
  - Rutas no detectadas redirigen a `/login` (fallback `**`)

---

## 2) Guards implementados

### `authGuard` (archivo `src/app/core/guards/auth.guard.ts`)
- Tipo: `CanMatchFn`
- Comportamiento: Permite el acceso a rutas protegidas si existe `currentUser$` en `AuthService`. Si no hay usuario, devuelve `router.createUrlTree(['/auth/login'])` (redirección a login).
- Uso principal: proteger los bloques de rutas privadas (ej. `/intranet`).

### `hasRoleGuard` (archivo `src/app/core/guards/has-role.guard.ts`)
- Tipo: Factory que devuelve `CanActivateFn`.
- Uso: `hasRoleGuard(['admin'])` o `hasRoleGuard(['veterinario','admin'])`.
- Comportamiento: Comprueba `inject(AuthService).currentUser$` y valida si el usuario tiene al menos un rol permitido (usa `roles.some(...)`). Si no, deniega acceso (retorna `false`).
- Dependencias: `UserRole` está definido en `backend.ts` (tipos de rol: `admin`, `veterinario`, `enfermero`, `recepcionista`).

---

## 3) Servicios REST integrados

Los servicios que hacen llamadas a una API REST externa se ubican en `src/app/core/services/`.

### `ProductsService` (`src/app/core/services/products.service.ts`)
- Endpoint configurado: `http://localhost:8080/products`.
- Métodos:
  - `getProducts()` -> GET `http://localhost:8080/products` (devuelve listado de productos)
  - `createProduct(product)` -> POST `http://localhost:8080/products` (creación)
  - `updateProduct(product)` -> PUT `http://localhost:8080/products/:id` (actualizar)
  - `deleteProduct(productId)` -> DELETE `http://localhost:8080/products/:id` (borrar)
- Manejo de errores: Uso de `catchError` para capturar y re-motrar errores.

### `CustomersService` (`src/app/core/services/customers.service.ts`)
- Endpoint configurado: `http://localhost:8080/customers`.
- Uso por defecto: En versión de desarrollo está usando datos `mockCustomers` (simulación). Para usar el backend real, hay que descomentar las llamadas `this.http`.
- Métodos:
  - `getCustomers()` -> Retorna `mockCustomers` por ahora (o GET si se habilita).
  - `createCustomer(customer)` -> Simulación con `mockCustomers` (o POST si se habilita).
  - `updateCustomer(customer)` -> Simulación (o PUT si se habilita).
  - `deleteCustomer(customerId)` -> Simulación (o DELETE si se habilita).

### `UserService` (`src/app/core/services/user.service.ts`)
- Integra Firebase Firestore a través de `@angular/fire/firestore`.
- Método:
  - `createUser(userData: Partial<AppUser>)` -> `doc(this.firestore, \\`users/${userData.uid}\\`)` y `setDoc(ref, userData)`.
- Requiere configuración de Firebase en `src/environments` o el `environment` apropiado.

> Nota: El backend real (si existe) está pensado en `http://localhost:8080` para productos y clientes, y Firebase para usuarios.

---

## 4) Instalación y ejecución (método disponible en `README.md`)

Pasos básicos para desarrollar en local:

1. Clona el repositorio (origin/USUARIO puede variar):
```bash
# clone (usa la URL correcta de tu fork o upstream)
git clone https://github.com/jonathan0307/vetepet.git
cd vetepet
```

2. Instala dependencias:
```bash
npm install
```

3. Ejecutar app en modo desarrollo (dev server):
```bash
npm start
# o
ng serve
```

4. Ejecutar SSR (server-side rendering):
```bash
npm run build
npm run start:ssr
# o
node dist/angular-course/server/server.mjs
```

> Si no tienes un servidor REST corriendo en `http://localhost:8080`, muchas llamadas a `ProductsService`/`CustomersService` fallarán. `CustomersService` por defecto usa mock data, por lo que la sección de clientes funcionará sin backend.

---

## 5) Requisitos y configuración opcional

- Configurar Firebase para `UserService` (añadir `environment.ts` con las credenciales de Firebase).
- Configurar el backend REST en `localhost:8080` para endpoints `/products` y `/customers`.
- Configurar `auth` para que `AuthService` emita `currentUser$` con roles y datos de usuario.

---

## 6) Buenas prácticas y recomendaciones
- Centralizar la `apiUrl` en `environment.ts` (para no mantener URLs rígidas en el servicio).
- Agregar validaciones y modelos (interfaces) para `Product` y `Order` y eliminar `any` donde sea posible.
- Añadir e2e tests (Cypress) para verificar rutas protegidas y operaciones CRUD.

---

## 7) Documentos relacionados
- README.md (instalación, ejecución y características) — ya existe en la raíz del repo.
- MEJORAS_IMPLEMENTADAS.md — resumen de mejoras y cambios.

---

Fin de la documentación de alto nivel. Si deseas que lo exporte a un Word (`.docx`) o un PDF listo para descargar, puedo generarlo en el repo para que lo descargues o te ayude a convertir el Markdown a Word con herramientas como `pandoc`.
