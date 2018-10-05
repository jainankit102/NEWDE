import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-element',
  templateUrl: './list-of-element.component.html',
  styleUrls: ['./list-of-element.component.css']
})
export class ListOfElementComponent implements OnInit {

  constructor() { }
  objectCount = 0;
  ngOnInit() {
  }

  getElementId(event) {
    event.dataTransfer.setData('type', event.target.id);
  }

  getElementData(event: any, type: string) {
    event.dataTransfer.setData('type', type);
    this.objectCount++;
  }

}
