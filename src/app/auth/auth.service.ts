// src/app/auth/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  signOut
} from '@angular/fire/auth';

import { BehaviorSubject, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private firebaseAuth = inject(Auth);
  private router = inject(Router);


  private _currentUser = new BehaviorSubject<any | null>(null);
  currentUser$ = this._currentUser.asObservable();

  constructor() {

    if (typeof window !== 'undefined') {
      const user = this.getLocalUser();
      this._currentUser.next(user);
    }
  }

  // =====================================================
  // LOGIN
  // =====================================================
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      tap((cred: UserCredential) => {
        const user = cred.user;
        this.saveLocalUser(user);
        this._currentUser.next(user);
        this.router.navigateByUrl('/intranet');
      })
    );
  }

  // =====================================================
  // REGISTER
  // =====================================================
  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password)).pipe(
      tap((cred: UserCredential) => {
        const user = cred.user;
        this.saveLocalUser(user);
        this._currentUser.next(user);
        this.router.navigateByUrl('/intranet');
      })
    );
  }
  
  // =====================================================
  // LOGOUT
  // =====================================================
  logout() {
    from(signOut(this.firebaseAuth)).subscribe(() => {
      this.removeLocalUser();
      this._currentUser.next(null);
      this.router.navigate(['/auth/login']);
    });
  }

  // =====================================================

  // =====================================================
  private saveLocalUser(user: any) {
    if (typeof window === 'undefined') return; // SSR FIX
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private removeLocalUser() {
    if (typeof window === 'undefined') return; // SSR FIX
    localStorage.removeItem('userData');
  }

  private getLocalUser() {
    if (typeof window === 'undefined') return null; // SSR FIX
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  }
}
