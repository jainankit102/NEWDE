import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AalobjectComponent } from './aalobject.component';

describe('AalobjectComponent', () => {
  let component: AalobjectComponent;
  let fixture: ComponentFixture<AalobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AalobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AalobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
