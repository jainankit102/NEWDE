import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-chart-diagram',
  templateUrl: './flow-chart-diagram.component.html',
  styleUrls: ['./flow-chart-diagram.component.css']
})
export class FlowChartDiagramComponent implements OnInit {

  @Input() draggedElem;

  constructor() { }

  ngOnInit() {
  }

}
