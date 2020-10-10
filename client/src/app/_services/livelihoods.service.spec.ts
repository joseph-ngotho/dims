import { TestBed } from '@angular/core/testing';

import { LivelihoodsService } from './livelihoods.service';

describe('LivelihoodsService', () => {
  let service: LivelihoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivelihoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
