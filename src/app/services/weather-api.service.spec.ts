import { TestBed } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';

xdescribe('WeatherAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherAPIService = TestBed.get(WeatherAPIService);
    expect(service).toBeTruthy();
  });
});
