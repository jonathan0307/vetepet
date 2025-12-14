import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule   
  ]
})

export default class Login {
  _formBuilder = inject(FormBuilder);
  _authService = inject(AuthService);

  loginError = false;
  isLoading = false;

  form = this._formBuilder.group({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', Validators.required),
  });

  login() {
    if (!this.form.valid) return;

    this.isLoading = true;
    this.loginError = false;

    const email = this.form.value!.email!;
    const password = this.form.value!.password!;

    this._authService.login(email, password).subscribe({
      next: () => {
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.loginError = true;
        console.error('Error en login:', error);
      }
    });
  }

  getDemoUsers() {
    return [
      { email: 'admin@petcare.com', role: 'Administrador' },
      { email: 'maria@petcare.com', role: 'Veterinario' },
      { email: 'carlos@petcare.com', role: 'Veterinario' },
      { email: 'ana@petcare.com', role: 'Enfermero' },
      { email: 'luis@petcare.com', role: 'Recepcionista' }
    ];
  }
}
