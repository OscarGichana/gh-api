import { TestBed } from '@angular/core/testing';

import { GhRequestService } from './gh-request.service';

describe('GhRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhRequestService = TestBed.get(GhRequestService);
    expect(service).toBeTruthy();
  });
});
