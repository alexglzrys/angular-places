import { Injectable } from '@angular/core';
import { ref, Storage, uploadBytes, UploadResult } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  upload(filename: number, file: any): Promise<UploadResult> {
    // Generar una referencia del archivo (una instancia de archivo en el storage de Firebase)
    const fileRef = ref(this.storage, `places/${filename}`);
    // subir archivo
    return uploadBytes(fileRef, file);
  }
}
