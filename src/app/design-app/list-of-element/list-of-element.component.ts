import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-element',
  templateUrl: './list-of-element.component.html',
  styleUrls: ['./list-of-element.component.css']
})
export class ListOfElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getElementId(event) {
    event.dataTransfer.setData('key', event.target.id);
  }

}
