import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  photos: Photo[] = [];

  constructor(http:HttpClient){

    http
    .get<Photo[]>('http://localhost:3000/flavio/photos')
    .subscribe(photos => this.photos = photos);
  }

  }

  interface Photo{
    url: string
    description: string
}
