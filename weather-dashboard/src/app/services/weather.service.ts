import {Injectable} from '@angular/core';

import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { FormsModule } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'f734a708b35e4135e241b9ba87d469c2';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`).pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        return throwError(() => new Error('City not found'));
      })
    );
  }
  getForecast(city: string): Observable<any> {
    return this.http.get(`${this.forecastUrl}?q=${city}&appid=${this.apiKey}&units=metric`).pipe(
      catchError((error) => {
        console.error('Error fetching weather data:', error);
        return throwError(() => new Error('City not found'));
      })
    );
  }
}
