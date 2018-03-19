import { TestBed, inject } from '@angular/core/testing';

import { IdleTimeoutService } from './idle-timeout.service';

describe('IdleTimeoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdleTimeoutService]
    });
  });

  it('should be created', inject([IdleTimeoutService], (service: IdleTimeoutService) => {
    expect(service).toBeTruthy();
  }));
});
