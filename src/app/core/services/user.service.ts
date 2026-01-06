import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { AppUser } from '../../interfaces/app-user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestore = inject(Firestore);

  createUser(userData: Partial<AppUser>) {   
    const ref = doc(this.firestore, `users/${userData.uid}`);
    return setDoc(ref, userData);
  }
}
 