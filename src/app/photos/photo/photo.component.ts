import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  @Input() url='';
  @Input() description='';

}
