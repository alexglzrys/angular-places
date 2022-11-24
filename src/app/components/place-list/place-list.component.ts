import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Places } from '../../interfaces/places';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Places[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    // Suscribirme a cualquier cambio en la colección de lugares
    this.placesService.getPlaces().subscribe(places => this.places = places);
  }

}
