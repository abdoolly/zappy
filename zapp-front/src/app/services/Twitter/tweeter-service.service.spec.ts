import { TestBed } from '@angular/core/testing';

import { TweeterService } from './tweeter-service.service';

describe('TweeterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TweeterService = TestBed.get(TweeterService);
    expect(service).toBeTruthy();
  });

});
