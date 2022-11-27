import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-place-images',
  templateUrl: './place-images.component.html',
  styleUrls: ['./place-images.component.css']
})
export class PlaceImagesComponent implements OnInit {

  images: string[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.getListURLFiles().then(images => this.images = images);
  }

}
