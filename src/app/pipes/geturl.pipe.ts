import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Pipe({
  name: 'geturl'
})
export class GeturlPipe implements PipeTransform {

  constructor( private storageService: StorageService) { }

  // Obtener la URL desde Firebase para el archivo de imagen solicitado
  async transform(fullpath: string): Promise<string> {
    try {
      const url = await this.storageService.getURLFile(fullpath);
      return url;
    } catch (err) {
      return '';
    }
  }

}
