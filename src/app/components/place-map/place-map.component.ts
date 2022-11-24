import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Places } from '../../interfaces/places';

@Component({
  selector: 'app-place-map',
  templateUrl: './place-map.component.html',
  styleUrls: ['./place-map.component.css']
})
export class PlaceMapComponent implements OnInit {

  lng: number = -99.6532411;
  lat: number = 19.2809447;

  places: Places[] = [];

  constructor(private placesServices: PlacesService) { }

  ngOnInit(): void {
    this.placesServices.getPlaces().subscribe(places => this.places = places);
  }

}
