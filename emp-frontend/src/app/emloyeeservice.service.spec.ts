import { TestBed } from '@angular/core/testing';

import { EmloyeeserviceService } from './emloyeeservice.service';

describe('EmloyeeserviceService', () => {
  let service: EmloyeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmloyeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
