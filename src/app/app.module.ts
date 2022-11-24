import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NewPaceComponent } from './components/new-pace/new-pace.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { AgmCoreModule } from '@agm/core';
import { PlaceMapComponent } from './components/place-map/place-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPaceComponent,
    PlaceListComponent,
    PlaceMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf0IQ_yB3_UKyO_O7o7W2nyUKrAzz24is',
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
