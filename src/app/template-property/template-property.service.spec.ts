import { TestBed, inject } from '@angular/core/testing';

import { TemplatePropertyService } from './template-property.service';

describe('TemplatePropertyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplatePropertyService]
    });
  });

  it('should be created', inject([TemplatePropertyService], (service: TemplatePropertyService) => {
    expect(service).toBeTruthy();
  }));
});
