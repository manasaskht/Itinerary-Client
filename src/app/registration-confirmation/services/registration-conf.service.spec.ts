import { TestBed } from '@angular/core/testing';

import { RegistrationConfService } from './registration-conf.service';

describe('RegistrationConfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationConfService = TestBed.get(RegistrationConfService);
    expect(service).toBeTruthy();
  });
});
