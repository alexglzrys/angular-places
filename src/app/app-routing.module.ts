import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { PlacesComponent } from './components/places/places.component';
import { LoginComponent } from './auth/login/login.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { PlaceImagesComponent } from './components/place-images/place-images.component';

const routes: Routes = [
  {
    path: 'places',
    component: PlacesComponent,
    // Nueva API de Angular Fire (ya contiene guards para saber si un usuario esta o no autenticado)
    ...canActivate(() => redirectUnauthorizedTo('/login'))
  },
  {
    path: 'images',
    component: PlaceImagesComponent,
    ...canActivate(() => redirectUnauthorizedTo('/login'))
  },
  {
    path: 'register',
    component: RegisterComponent,
    // Redireccionar a un usuario autenticado a la ruta principal de la aplicación
    ...canActivate(() => redirectLoggedInTo('/'))
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(() => redirectLoggedInTo('/'))
  },
  { path: '', redirectTo: 'places', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
