import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestore = inject(Firestore);

  createUser(userData: any) {   
    const ref = doc(this.firestore, `users/${userData.uid}`);
    return setDoc(ref, userData);
  }
}
 