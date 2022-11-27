import { Injectable } from '@angular/core';
import { getDownloadURL, listAll, ref, Storage, uploadBytes, UploadResult } from '@angular/fire/storage';

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

  async getListURLFiles(): Promise<string[]> {
    const images: string[] = [];
    // Obtener la referencia al path dónde se localizan todas las imágenes
    const imagesRef = ref(this.storage, `places`);

    try {
      // Obtener un listado de todas ellas
      const imagesStorage = await listAll(imagesRef)
      // Generar la URL para cada imagen encontrada en la referencia indicada
      imagesStorage.items.forEach(async (image) => images.push(await getDownloadURL(image)))
      return images;
    } catch (err) {
      console.log(err);
      return images;
    }

  }
}
