

import { EdgeMaterialServiceService } from './edge-material-service.service';
import {expect} from "@angular/core/testing/src/testing_internal";

describe('EdgeMaterialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdgeMaterialServiceService = TestBed.get(EdgeMaterialServiceService);
    expect(service).toBeTruthy();
  });
});
