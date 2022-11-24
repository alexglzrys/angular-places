import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-new-pace',
  templateUrl: './new-pace.component.html',
  styleUrls: ['./new-pace.component.css']
})
export class NewPaceComponent implements OnInit {

  registerFormPlace: FormGroup;

  constructor(private formBuiler: FormBuilder,
              private placesService: PlacesService) {
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
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }

}
