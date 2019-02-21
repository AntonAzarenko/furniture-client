import { TestBed } from '@angular/core/testing';

import { OrderStorageService } from './order-storage.service';
import {describe, expect} from "@angular/core/testing/src/testing_internal";

describe('OrderStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderStorageService = TestBed.get(OrderStorageService);
    expect(service).toBeTruthy();
  });
});
