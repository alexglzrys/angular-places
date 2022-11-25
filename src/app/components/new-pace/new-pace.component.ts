import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-new-pace',
  templateUrl: './new-pace.component.html',
  styleUrls: ['./new-pace.component.css']
})
export class NewPaceComponent implements OnInit {

  registerFormPlace: FormGroup;

  constructor(private formBuiler: FormBuilder,
              private placesService: PlacesService,
              private toastrService: ToastrService) {
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

}
