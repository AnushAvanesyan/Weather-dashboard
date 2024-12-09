import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;
  const mockWeatherResponse = {
    main: {
      temp: 22.5,
      pressure: 1015,
      humidity: 78
    },
    weather: [{
      description: 'clear sky'
    }],
    name: 'London'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data for a city', () => {
    const city = 'London';
    service.getWeatherByCity(city).subscribe((data) => {
      expect(data.name).toBe('London');
      expect(data.weather[0].description).toBe('clear sky');
      expect(data.main.temp).toBe(22.5);
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?q=London&appid=f734a708b35e4135e241b9ba87d469c2&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
