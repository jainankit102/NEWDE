import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfElementComponent } from './list-of-element/list-of-element.component';
import { FlowChartDiagramComponent } from './flow-chart-diagram/flow-chart-diagram.component';
import { DesignAppComponent } from './design-app.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [DesignAppComponent],
  declarations: [ListOfElementComponent, FlowChartDiagramComponent, DesignAppComponent]
})
export class DesignAppModule { }
