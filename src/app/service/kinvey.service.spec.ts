import { TestBed } from '@angular/core/testing';

import { KinveyService } from './kinvey.service';

describe('KinveyService', () => {
  let service: KinveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KinveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
