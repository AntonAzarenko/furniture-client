

import { EdgeMaterialServiceService } from './edge-material-service.service';
import {describe, expect} from "@angular/core/testing/src/testing_internal";
import {TestBed} from "@angular/core/testing";

describe('EdgeMaterialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdgeMaterialServiceService = TestBed.get(EdgeMaterialServiceService);
    expect(service).toBeTruthy();
  });
});
