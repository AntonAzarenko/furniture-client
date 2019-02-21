import { TestBed } from '@angular/core/testing';

import { OrderStorageService } from './order-storage.service';

describe('OrderStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderStorageService = TestBed.get(OrderStorageService);
    expect(service).toBeTruthy();
  });
});
