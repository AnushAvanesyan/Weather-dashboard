import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CityCardComponent} from "../city-card/city-card.component";
import {WeatherService} from "../../services/weather.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, CityCardComponent  ],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 300ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms 300ms', style({ transform: 'translateX(0)' }))
      ])
    ])]
})
export class WeatherDashboardComponent implements OnInit{
  cities: any[] = [];
  cityName: string = ' ';
  isLoading = false;
  error: string | null = null;
  constructor(private weatherService: WeatherService,
              @Inject(PLATFORM_ID) private platformId: any) { }
  ngOnInit(): void {
   if (isPlatformBrowser(this.platformId)){
      const savedCities = localStorage.getItem('cities');
      if (savedCities) {
        this.cities = JSON.parse(savedCities);
      }
    }
  }
  addCity() {
    if(!this.cityName.trim()) return;
    this.isLoading = true;
    this.error = null;
    this.weatherService.getWeatherByCity(this.cityName)
      .subscribe({ next: (data) => {
          this.weatherService.getForecast(this.cityName).subscribe({
            next: (forecastData) => {
              data.forecast =  forecastData.list.slice(0, 5);
              this.cities.push(data);
              if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('cities', JSON.stringify(this.cities));
              }
              this.cityName = '';
            }
          })

        },
        error: (err) => {
          this.error = err.message;
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      })
  }
  removeCity(index: number){
    this.cities.splice(index, 1);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cities', JSON.stringify(this.cities));
    }
  }
}
