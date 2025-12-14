import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class Dashboard implements OnInit, AfterViewInit {

  citasRecientes: any[] = [];
  todasLasCitas: any[] = [];

  ngOnInit() {
    this.cargarCitas();
  }

  ngAfterViewInit() {
    this.generarGrafico();
  }

  cargarCitas() {
    this.todasLasCitas = JSON.parse(localStorage.getItem('citas') || '[]');

    // últimas 5 citas
    this.citasRecientes = this.todasLasCitas.slice(-5).reverse();
  }

  generarGrafico() {

    // Agrupar citas por fecha
    const citasPorDia: { [fecha: string]: number } = {};

    this.todasLasCitas.forEach(cita => {
      const fecha = cita.fecha; // <-- usa el nombre real del campo en tus datos
      if (!citasPorDia[fecha]) citasPorDia[fecha] = 0;
      citasPorDia[fecha]++;
    });

    // Convertir agrupación a arrays
    const labels = Object.keys(citasPorDia);
    const data = Object.values(citasPorDia);

    new Chart("graficoCitas", {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Citas Registradas por Día",
          data,
          borderWidth: 3,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
 