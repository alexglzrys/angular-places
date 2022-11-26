import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth'
import { NewPaceComponent } from './components/new-pace/new-pace.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { AgmCoreModule } from '@agm/core';
import { PlaceMapComponent } from './components/place-map/place-map.component';

import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './auth/register/register.component';
import { PlacesComponent } from './components/places/places.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPaceComponent,
    PlaceListComponent,
    PlaceMapComponent,
    RegisterComponent,
    PlacesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.apiKeyGoogle,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Importar los proveedores de cada servicio de Firebase usado en nuestra aplicación - Nueva API
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
