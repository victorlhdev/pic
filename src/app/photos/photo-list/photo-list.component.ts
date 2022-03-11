import { Photo } from './../photo/photo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private PhotoService: PhotoService,
    private ActivatedRoute: ActivatedRoute
    ){ }

  ngOnInit(): void {

  const userName = this.ActivatedRoute.snapshot.params['userName']

    this.PhotoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos)
  }

}
