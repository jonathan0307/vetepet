// src/app/auth/register.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [ReactiveFormsModule, CommonModule]
})
export default class Register {

  fb = inject(FormBuilder);
  auth = inject(AuthService);
  router = inject(Router);

  isLoading = false;
  registerError = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  register() {
    if (this.form.invalid) return;

    const { email, password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      this.registerError = 'Las contraseñas no coinciden';
      return;
    }

    this.isLoading = true;
    this.registerError = '';

    this.auth.register(email!, password!).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isLoading = false;
        this.registerError = err.message;
      }
    });
  }
}
