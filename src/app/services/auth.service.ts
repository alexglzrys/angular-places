import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  // Registrar un usuario usando el método de email y password
  register({email, password}: any): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Login de usuarios con email y contraseña
  login({email, password}: any): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Login con redes sociales - Google
  loginWithGoogle(): Promise<UserCredential> {
    // Lanzar el popup, indicando una instancia del proveedor o servicio para autenticación
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  // logout
  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
