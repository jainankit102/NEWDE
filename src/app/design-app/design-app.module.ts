import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfElementComponent } from './list-of-element/list-of-element.component';
import { FlowChartDiagramComponent } from './flow-chart-diagram/flow-chart-diagram.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListOfElementComponent, FlowChartDiagramComponent]
})
export class DesignAppModule { }
