import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ti-template',
  templateUrl: './ti-template.component.html',
  styleUrls: ['./ti-template.component.css']
})
export class TiTemplateComponent implements OnInit {

  payLoad = {
    object: [],
    relation: [],
    appName: 'Edu test2'
  };

  objectMeta = {
    propertyType: '',
    objectId: '',
    payLoad: this.payLoad
  };
  selectedElement = '';

  constructor() { }

  ngOnInit() {
  }

   dragRect(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}
 allowDrop(ev) {
    ev.preventDefault();
}
 drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    if (data === 'object') {
      this.createObject();
    }
  }

  createObject() {
    this.payLoad.object.push({objectName: 'qqqqqq', id: 'Object_' + this.payLoad.object.length});
    this.selectedElement = this.payLoad.object.find(val => val.objectName === 'qqqqqq').id;
    this.objectMeta.propertyType = 'object';
  }

  getObjectName(value) {
    this.payLoad.object.find(val => val.id === this.selectedElement).objectName = value;
  }

  getObjectMeta(event) {
    this.objectMeta.objectId = event.target.id;
  }

  createRelation(relationAlias) {
    this.payLoad.relation.push(relationAlias);
    console.log(this.payLoad);
  }
}
