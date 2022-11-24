import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Places } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Places): Promise<DocumentReference<DocumentData>> {
    // Apuntar a la referencia a la base de datos, dónde se encuentra la colección principal para este proyecto
    const placeRef = collection(this.firestore, 'places');
    // Agregar el documento a la coleccion
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Places[]> {
     // Apuntar a la referencia a la base de datos, dónde se encuentra la colección principal para este proyecto
     const placeRef = collection(this.firestore, 'places');
     // Recuperar el listado de lugares registrados
     // Se realiza un casting de información para recuperarlos como un Observable del tipo Array de Lugares
     return collectionData(placeRef, { idField: 'id' }) as Observable<Places[]>
  }

}
