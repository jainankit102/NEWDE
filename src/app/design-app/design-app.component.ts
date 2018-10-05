import { Component, OnInit } from '@angular/core';
import { ViewElementProperty, AALObject } from './design-app-model';

@Component({
  selector: 'app-design-app',
  templateUrl: './design-app.component.html',
  styleUrls: ['./design-app.component.css']
})
export class DesignAppComponent implements OnInit {

  typeOfElement = '';

  userElementDragEvent: DragEvent;
  constructor() { }

  objectProperty: AALObject = {
    name: 'test',
    id: '12345',
  };

  dummyPropertyData: ViewElementProperty = {
    type: 'Object',
    value: {}
  };

  ngOnInit() {
  }


  allowDrop(event) {
    // console.log('test', event);
    this.userElementDragEvent = event;
    event.preventDefault();
  }

  appendElement(event) {
    event.preventDefault();
    console.log(event.dataTransfer.getData('type'));
    this.typeOfElement = event.dataTransfer.getData('type');
  }

}
