# Resultados de pruebas funcionales — Vetepet

Este documento resume pruebas funcionales propuestas y resultados observados en revisión estática y experimentos locales (si aplica).

> Para ejecutar las pruebas locales completas, requiere Node y un backend REST (o usar los mocks incorporados del servicio `CustomersService`).

---

## 1) Prueba: Inicio de aplicación y rutas públicas

- Objetivo: Verificar que la app carga y las rutas públicas están disponibles.
- Steps:
  1. Ejecutar `npm start` (o `ng serve`).
  2. Abrir `http://localhost:4200`.
  3. Navegar a `/`, `/gallery`, `/directives`, `/customers`.
- Resultado esperado: Las páginas públicas cargan correctamente; `/customers` muestra una lista con datos mock.
- Resultado observado: El `customers` se alimenta desde `mockCustomers` por defecto; el frontend carga sin llamadas REST necesarias para ver clientes.

---

## 2) Prueba: Login y acceso a la intranet (authGuard)

- Objetivo: Verificar que usuarios no autenticados son redirigidos y usuarios autenticados pueden acceder a `/intranet`.
- Steps:
  1. Intentar acceder a `/intranet` sin un usuario autenticado.
  2. Verificar que `authGuard` redirige a `/auth/login`.
  3. Iniciar sesión (si hay un método de autenticación implementado) y acceder a `/intranet`.
- Resultado esperado: Sin sesión, el router debería devolver UrlTree de `/auth/login`. Con sesión (p. ej. `currentUser$` emitido por `AuthService`), deberías poder acceder.
- Resultado observado: `authGuard` devuelve `router.createUrlTree(['/auth/login'])` si `currentUser$` es nulo — comportamiento consistente con la implementación.

---

## 3) Prueba: Roles y acceso a rutas privadas (hasRoleGuard)

- Objetivo: Verificar que rutas `/intranet/orders`, `/intranet/reports` y `/intranet/admin` solo sean accesibles según roles.
- Steps:
  1. Autenticar usuario con role `veterinario` y acceder a `/intranet/orders` y `/intranet/reports` — deberían permitir.
  2. Acceder a `/intranet/admin` con `veterinario` — debería negar.
  3. Acceder con `admin` — permitir todas.
- Resultado esperado: `hasRoleGuard` valida por roles; solo usuarios con roles permitidos pueden ingresar.
- Resultado observado: El guard chequea `user.roles.some(...)` y permite/deniega correctamente según roles en `backend.ts`.

---

## 4) Prueba: CRUD de clientes (CustomersService)

- Objetivo: Verificar la funcionalidad CRUD de clientes.
- Steps:
  1. En el UI de `customers`, crear un cliente.
  2. Verificar que el cliente aparezca en la lista (usando `mockCustomers`).
  3. Editar cliente y verificar cambios.
  4. Eliminar cliente y verificar que ya no esté.
- Resultado esperado: Con `mockCustomers` habilitados, creación/edición/eliminación deberían funcionar sin backend.
- Resultado observado: `CustomersService` actualmente simula las operaciones; son exitosas en el frontend y no requieren backend.

---

## 5) Prueba: CRUD de productos (ProductsService)

- Objetivo: Verificar la integración con un backend REST para productos.
- Steps:
  1. Levantar backend REST en `http://localhost:8080` que responda a `/products`.
  2. Ejecutar `getProducts`, `createProduct`, `updateProduct`, `deleteProduct` (desde UI o consola).
- Resultado esperado: Respuestas 200/201 y la UI debe actualizar la lista de productos.
- Resultado observado: No se probó el backend real (no incluído), pero `ProductsService` maneja headers y errores con `catchError`.

---

## 6) Prueba: SSR (Server Side Rendering)

- Objetivo: Verificar que la versión SSR responda correctamente.
- Steps:
  1. `npm run build` para generar `dist`.
  2. `npm run start:ssr` o `node dist/angular-course/server/server.mjs`.
  3. Verificar `http://localhost:4000` (o puerto configurado) y ver respuesta HTML.
- Resultado esperado: SSR responde con HTML inyectado por Angular universal.
- Resultado observado: El servidor express en `server.ts` usa `CommonEngine` y `main.server.ts`. El log al iniciar ahora muestra `console.info` con puerto.

---

## 7) Prueba: Auth Service y creación de usuario en Firestore

- Objetivo: Verificar `createUser` con `UserService` y la integración a Firebase.
- Steps:
  1. Configure Firebase credenciales y variables en `environment.ts`.
  2. Iniciar la app y realizar registro para que el servicio llame `createUser`.
- Resultado esperado: El `doc(users/uid)` en la colección `users` se crea en Firestore.
- Resultado observado: La función `createUser` usa `setDoc(ref, userData)` y está tipada con `Partial<AppUser>`. La integración requiere credenciales de Firebase.

---

## Observaciones finales
- El estado actual del repositorio soporta la mayoría de pruebas funcionales con los mocks (customers). Para probar productos y otras integraciones con un backend real, es necesario desplegar o simular el backend REST en `http://localhost:8080`.
- Los guards (`authGuard` y `hasRoleGuard`) implementan la lógica de seguridad a nivel del routing.

---

Si quieres, puedo generar tests automatizados (unit tests y e2e) esbozados para `AuthService`, `hasRoleGuard` y `CustomersService` (mocks) y añadirlos en la carpeta `tests/` o `e2e/`. También puedo convertir estos documentos a `.docx` si lo prefieres.
