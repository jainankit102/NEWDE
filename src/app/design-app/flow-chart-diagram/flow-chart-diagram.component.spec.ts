import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChartDiagramComponent } from './flow-chart-diagram.component';

describe('FlowChartDiagramComponent', () => {
  let component: FlowChartDiagramComponent;
  let fixture: ComponentFixture<FlowChartDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowChartDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowChartDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
