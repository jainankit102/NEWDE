import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiTemplateComponent } from './ti-template.component';

describe('TiTemplateComponent', () => {
  let component: TiTemplateComponent;
  let fixture: ComponentFixture<TiTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
