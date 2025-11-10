# 🏥 Clínica Veterinaria PetCare

Sistema web completo para la gestión de una clínica veterinaria desarrollado con Angular 19.

## 🚀 Características

- **Sistema de autenticación** con roles (Admin, Veterinario, Enfermero, Recepcionista)
- **Gestión de clientes y mascotas** con CRUD completo
- **Catálogo de servicios veterinarios** (consultas, cirugías, vacunación, emergencias)
- **Historial médico** de pacientes
- **Dashboard administrativo** con reportes y estadísticas
- **Diseño responsive** con Bootstrap 5
- **Server-Side Rendering (SSR)** para mejor SEO
- **Arquitectura modular** con lazy loading

## 🛠️ Tecnologías

- Angular 19
- TypeScript
- Bootstrap 5.3.3
- Feather Icons
- Angular SSR
- RxJS

## 📋 Instalación

```bash
# Clonar el repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve

# Navegar a http://localhost:4200
```

## 🔑 Usuarios de Prueba

- **Admin**: admin@petcare.com
- **Veterinario**: maria@petcare.com / carlos@petcare.com
- **Enfermero**: ana@petcare.com
- **Recepcionista**: luis@petcare.com

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── auth/           # Sistema de autenticación
│   ├── core/           # Servicios y guards
│   ├── modules/
│   │   ├── outer/      # Páginas públicas
│   │   └── inner/      # Panel administrativo
│   └── shared/         # Componentes compartidos
```

## 🚀 Compilación

```bash
# Desarrollo
ng build

# Producción
ng build --configuration production
```

## 📄 Licencia

© 2025 Clínica Veterinaria PetCare. Todos los derechos reservados.
