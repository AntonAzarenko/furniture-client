import { TestBed } from '@angular/core/testing';

import { OrderCalculationService } from './order-calculation.service';

describe('OrderCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderCalculationService = TestBed.get(OrderCalculationService);
    expect(service).toBeTruthy();
  });
});
