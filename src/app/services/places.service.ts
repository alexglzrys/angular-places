import { Injectable } from '@angular/core';
import { addDoc, collection, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore';
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

}
