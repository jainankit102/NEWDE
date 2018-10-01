import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-app',
  templateUrl: './design-app.component.html',
  styleUrls: ['./design-app.component.css']
})
export class DesignAppComponent implements OnInit {

  draggedElem = '';
  constructor() { }

  ngOnInit() {
  }


  allowDrop(event) {
    event.preventDefault();
  }
  appendElement(event) {
    event.preventDefault();
    console.log(event.dataTransfer.getData('key'));
    this.draggedElem = event.dataTransfer.getData('key');
  }

}
