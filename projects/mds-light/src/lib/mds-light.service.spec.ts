import { TestBed } from '@angular/core/testing';

import { MdsLightService } from './mds-light.service';

describe('MdsLightService', () => {
  let service: MdsLightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdsLightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
