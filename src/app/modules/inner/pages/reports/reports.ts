import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export default class ReportsComponent implements OnInit {

  citas: any[] = [];

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citas = JSON.parse(localStorage.getItem('citas') || '[]');
  }

  eliminarCita(index: number) {
    if (confirm('¿Estás seguro de eliminar esta cita?')) {
      this.citas.splice(index, 1);
      localStorage.setItem('citas', JSON.stringify(this.citas));
    }
  }

  cambiarEstado(cita: any) {
    const estados = ['Pendiente', 'En Proceso', 'Completada'];
    const actual = estados.indexOf(cita.estado);

    cita.estado = estados[(actual + 1) % estados.length];

    localStorage.setItem('citas', JSON.stringify(this.citas));
  }
}
 