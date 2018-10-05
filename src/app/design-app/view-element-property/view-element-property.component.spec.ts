import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElementPropertyComponent } from './view-element-property.component';

describe('ViewElementPropertyComponent', () => {
  let component: ViewElementPropertyComponent;
  let fixture: ComponentFixture<ViewElementPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewElementPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewElementPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
