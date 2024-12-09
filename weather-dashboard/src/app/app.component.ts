import {Component} from '@angular/core';
import {WeatherDashboardComponent} from "./components/weather-dashboard/weather-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Weather Dashboard"
}
