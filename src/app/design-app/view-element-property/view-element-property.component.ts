import { Component, OnInit, Input } from '@angular/core';
import { ViewElementProperty } from '../design-app-model';

@Component({
  selector: 'app-view-element-property',
  templateUrl: './view-element-property.component.html',
  styleUrls: ['./view-element-property.component.css']
})
export class ViewElementPropertyComponent implements OnInit {

  @Input() viewElementProperty: ViewElementProperty;

  constructor() { }

  ngOnInit() {
  }

}
