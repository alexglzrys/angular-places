import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  // Registrar un usuario usando el método de email y password
  register({email, password}: any): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
