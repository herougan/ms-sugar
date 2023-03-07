import { TestBed } from '@angular/core/testing';

import { OptimiserService } from './optimiser.service';

describe('OptimiserService', () => {
  let service: OptimiserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimiserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
