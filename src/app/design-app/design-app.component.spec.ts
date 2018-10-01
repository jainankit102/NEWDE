import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAppComponent } from './design-app.component';

describe('DesignAppComponent', () => {
  let component: DesignAppComponent;
  let fixture: ComponentFixture<DesignAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
