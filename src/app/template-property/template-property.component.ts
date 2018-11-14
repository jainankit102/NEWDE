import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { TemplatePropertyService } from './template-property.service';

@Component({
  selector: 'app-template-property',
  templateUrl: './template-property.component.html',
  styleUrls: ['./template-property.component.css']
})
export class TemplatePropertyComponent implements OnInit, OnChanges {

  @Input() objectMeta;
  @Output() objectName: EventEmitter<any> = new EventEmitter<any>();
  @Output() newRelation: EventEmitter<any> = new EventEmitter<any>();
  relationFlag = false;
  appMeta = '';
  constructor(private templatePropertyService: TemplatePropertyService) { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  getObjectName(objectId) {
    return this.objectMeta.payLoad.object.find(val => val.id === objectId) ?
    this.objectMeta.payLoad.object.find(val => val.id === objectId).objectName : '';
  }

  addObject(event) {
    this.objectName.emit(event.value);
  }

  addRelataion() {
    this.relationFlag = true;
  }

  colapseRelation() {
    this.relationFlag = false;
  }

  createRelation(Object1, Object2) {
    const relationAlias = Object1.value + ':' + Object2.value;
    const source = Object1.value;
    const target = Object2.value;
    const sourceIndex = this.objectMeta.payLoad.object.findIndex(ind => ind.id === source);
    const targetIndex = this.objectMeta.payLoad.object.findIndex(ind2 => ind2.id === target);
    const relationObj = {relationAlias: relationAlias, source: source, sourceIndex: sourceIndex, target: target, targetIndex: targetIndex};
    this.newRelation.emit(relationObj);
  }

  getObjectListXml() {
    let objXML = '';
    this.objectMeta.payLoad.object.forEach(element => {
    objXML = objXML + '<table><table_name>![CDATA[' + element.value + ']]</table_name><field></field><primary_key>id</primary_key></table>';
    });
    return objXML;
  }

  getRelationXml() {
    let relXML = '';
    this.objectMeta.payLoad.relation.forEach(element => {
      relXML = relXML + '<relationship><masterTable>![CDATA[' + element.relation.source + ']]</masterTable>' +
      '<detailTable><![CDATA[' + element.relation.target + ']]></detailTable><cardinality>2</cardinality></relationship>';
    });
    return relXML;
  }

  createApplication() {
    this.appMeta = '<scratchApplications>' +
    '<application>' +
      '<application_name><![CDATA[' + this.objectMeta.payLoad.appName + ']]></application_name>' +
      '<application_type>0</application_type>' +
        this.getObjectListXml() +
    '</application>' +
    '<tableRelationShip>' +
    this.getRelationXml() +
    '</tableRelationShip>' +
  '</scratchApplications>';
    this.templatePropertyService.CreateApp(this.appMeta).subscribe(res => {
      return res;
    });
  }

}
