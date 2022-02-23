import { PhotoService } from './photos/photo/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  photos: any[] = [];

  constructor(private PhotoService: PhotoService){ }

  ngOnInit(): void {

    this.PhotoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
  }

  };


