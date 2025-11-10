import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var feather: any;

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.css'
})
export class GalleryComponent implements AfterViewInit {

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  products = [
    {
      "id": 1,
      "title": "Consulta General",
      "description": "Revisión completa de salud para tu mascota. Incluye examen físico, evaluación nutricional y plan preventivo personalizado.",
      "category": "consultas",
      "price": 45.00,
      "rating": 4.9,
      "availability": "Disponible",
      "duration": "30-45 min",
      "images": ["https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 2,
      "title": "Vacunación Completa",
      "description": "Programa completo de vacunación para cachorros y adultos. Protección contra enfermedades comunes y seguimiento inmunológico.",
      "category": "vacunacion",
      "price": 35.00,
      "rating": 4.8,
      "availability": "Disponible",
      "duration": "15-20 min",
      "images": ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 3,
      "title": "Cirugía de Esterilización",
      "description": "Procedimiento quirúrgico seguro para esterilización de perros y gatos. Incluye pre-operatorio, cirugía y cuidados post-operatorios.",
      "category": "cirugia",
      "price": 180.00,
      "rating": 4.9,
      "availability": "Programar cita",
      "duration": "2-3 horas",
      "images": ["https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 4,
      "title": "Emergencias 24/7",
      "description": "Atención de emergencia las 24 horas. Equipo especializado en cuidados intensivos y cirugías de urgencia.",
      "category": "emergencias",
      "price": 75.00,
      "rating": 4.7,
      "availability": "24/7",
      "duration": "Variable",
      "images": ["https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 5,
      "title": "Odontología Veterinaria",
      "description": "Limpieza dental, extracciones y tratamientos odontológicos especializados. Mantén la salud dental de tu mascota.",
      "category": "odontologia",
      "price": 120.00,
      "rating": 4.6,
      "availability": "Programar cita",
      "duration": "1-2 horas",
      "images": ["https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 6,
      "title": "Laboratorio y Diagnóstico",
      "description": "Análisis clínicos completos, radiografías y estudios especializados para diagnóstico preciso y tratamiento efectivo.",
      "category": "diagnostico",
      "price": 85.00,
      "rating": 4.8,
      "availability": "Disponible",
      "duration": "30 min",
      "images": ["https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 7,
      "title": "Grooming y Estética",
      "description": "Servicio completo de peluquería canina y felina. Baño, corte, limpieza de oídos y corte de uñas profesional.",
      "category": "grooming",
      "price": 55.00,
      "rating": 4.5,
      "availability": "Disponible",
      "duration": "1-2 horas",
      "images": ["https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 8,
      "title": "Hospitalización",
      "description": "Cuidados intensivos y hospitalización para mascotas que requieren monitoreo continuo y tratamiento especializado.",
      "category": "hospitalizacion",
      "price": 150.00,
      "rating": 4.9,
      "availability": "Según necesidad",
      "duration": "Por día",
      "images": ["https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    },
    {
      "id": 9,
      "title": "Nutrición y Dietética",
      "description": "Consultas especializadas en nutrición animal. Planes dietéticos personalizados para diferentes etapas de vida.",
      "category": "nutricion",
      "price": 40.00,
      "rating": 4.7,
      "availability": "Disponible",
      "duration": "45 min",
      "images": ["https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"],
      "thumbnail": "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80"
    }
  ]
}
