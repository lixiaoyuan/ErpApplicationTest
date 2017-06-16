import { TestBed, inject } from '@angular/core/testing';

import { CrisisDetailResolveService } from './crisis-detail-resolve.service';

describe('CrisisDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrisisDetailResolveService]
    });
  });

  it('should be created', inject([CrisisDetailResolveService], (service: CrisisDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
