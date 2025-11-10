import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-service-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  service: any = null;
  
  services = [
    {
      id: 1,
      title: 'Consulta General',
      category: 'consulta',
      description: 'Examen médico completo para tu mascota',
      price: 50,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400',
      fullDescription: 'Nuestras consultas generales incluyen examen físico completo, revisión de signos vitales, evaluación del estado nutricional y recomendaciones personalizadas para el cuidado de tu mascota.'
    },
    {
      id: 2,
      title: 'Vacunación',
      category: 'prevencion',
      description: 'Programa completo de vacunación',
      price: 35,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400',
      fullDescription: 'Mantenemos a tu mascota protegida con nuestro programa de vacunación que incluye vacunas contra rabia, moquillo, parvovirus y otras enfermedades importantes.'
    },
    // Más servicios...
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.service = this.services.find(s => s.id === parseInt(id));
    }
  }

  goBack() {
    this.router.navigate(['/gallery']);
  }

  bookAppointment() {
    alert(`Cita agendada para: ${this.service.title}`);
  }
}
