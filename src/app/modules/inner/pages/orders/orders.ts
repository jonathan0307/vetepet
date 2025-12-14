import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export default class OrdersComponent {

  citaForm!: FormGroup;
  mensajeExito = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.citaForm = this.fb.group({
      nombreMascota: ['', Validators.required],
      nombreDueno: ['', Validators.required],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      especie: ['', Validators.required],
      motivo: ['', Validators.required],
    });
  }

  registrarCita() {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched();
      return;
    }

    const nuevaCita = this.citaForm.value;
    const citasGuardadas = JSON.parse(localStorage.getItem('citas') || '[]');

    citasGuardadas.push(nuevaCita);

    localStorage.setItem('citas', JSON.stringify(citasGuardadas));

    this.mensajeExito = '✔ La cita ha sido registrada correctamente';
    this.citaForm.reset();

    setTimeout(() => this.mensajeExito = '', 2500);
  }
}
