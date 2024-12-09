import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDashboardComponent } from './weather-dashboard.component';
import { WeatherService } from '../../services/weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityCardComponent } from '../city-card/city-card.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('WeatherDashboardComponent', () => {
  let component: WeatherDashboardComponent;
  let fixture: ComponentFixture<WeatherDashboardComponent>;
  let weatherService: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getWeatherByCity', 'getForecast']);

    await TestBed.configureTestingModule({
      imports: [WeatherDashboardComponent, CommonModule, FormsModule, CityCardComponent, HttpClientModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherDashboardComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
  });

  it('should handle error when the city is not found', () => {
    const errorResponse = { message: 'City not found' };
    weatherService.getWeatherByCity.and.returnValue(throwError(() => errorResponse));

    component.cityName = 'UnknownCity';
    component.addCity();

    fixture.detectChanges();


    expect(component.isLoading).toBeFalse();
    expect(component.error).toBe('City not found');
  });
});
