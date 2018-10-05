import { Component, OnInit, Input } from '@angular/core';
import { AALObject } from '../../design-app-model';

@Component({
  selector: 'g[app-aalobject]',
  templateUrl: './aalobject.component.html',
  styleUrls: ['./aalobject.component.css']
})
export class AalobjectComponent implements OnInit {

  @Input() objectPosition: DragEvent;

  objectProperty: AALObject;

  constructor() { }

  ngOnInit() {

    console.log('In object position', this.objectPosition);
  }

}
