import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlacesService } from '../../services/places.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-new-pace',
  templateUrl: './new-pace.component.html',
  styleUrls: ['./new-pace.component.css']
})
export class NewPaceComponent implements OnInit {

  registerFormPlace: FormGroup;

  constructor(private formBuiler: FormBuilder,
              private placesService: PlacesService,
              private toastrService: ToastrService,
              private storageService: StorageService) {
    this.registerFormPlace = this.formBuiler.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async registerPlace() {
    if (this.registerFormPlace.valid) {
      try {
        const response = await this.placesService.addPlace(this.registerFormPlace.value);
        this.toastrService.success('Lugar registrado correctamente en el sistema', 'Aviso');
        this.registerFormPlace.reset();
      } catch (err) {
        console.log(err);
        this.toastrService.error('Se presentó un error inesperado', 'Aviso');
      }
    }
  }

  async uploadImage(event: any) {
    // Obtener una referencia al archivo
    const file = event.target.files[0]
    console.log(file)
    // Generar un nombre único para la imagen basado en un timestamp
    const filename = new Date().getTime();
    const file_name_with_extension = `${filename}.${file.name.split('.').pop()}`;

    // Subir archivo a la nube de almacenamiento de Firebase
    try {
      const response = await this.storageService.upload(filename, file);
      // Los campos de tipo File que forman parte de un formulario reactivo, es imposible establecer su valor de forma programatica
      // por tanto, este enfoque es el camino a seguir si se desea colocar un nombre personalizado
      this.registerFormPlace.patchValue({ image: response.metadata.fullPath });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

}
