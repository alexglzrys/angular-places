import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { Places } from '../../interfaces/places';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Places[] = [];

  constructor(private placesService: PlacesService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    // Suscribirme a cualquier cambio en la colección de lugares
    this.placesService.getPlaces().subscribe(places => this.places = places);
  }

  async deletePlace(place: Places) {
    try {
      const response = await this.placesService.deletePlace(place);
      this.toastrService.info('Lugar eliminado con éxito', 'Aviso');
    } catch (err) {
      console.log(err);
      this.toastrService.error('Se presentó un error inesperado al momento de borrar el lugar', 'Aviso');
    }
  }

}
