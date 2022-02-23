import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  photos: Photo[] = [];

  constructor(PhotoService: PhotoService){

    PhotoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)

  }

  };

  interface Photo{
    url: string
    description: string
  };


