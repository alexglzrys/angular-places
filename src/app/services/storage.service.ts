import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes, UploadResult } from '@angular/fire/storage';

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

  getURLFile(path: string): Promise<string> {
    // Obtener una referencia al archivo que se desea descargar
    const imageRef = ref(this.storage, path);
    // retornar la url pública de este archivo
    return getDownloadURL(imageRef)
  }
}
