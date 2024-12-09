import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { CityCardComponent } from './city-card.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { By } from '@angular/platform-browser';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityCardComponent, CommonModule, BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the city name and temperature', () => {
    const mockCity = {
      name: 'London',
      main: { temp: 15 },
      weather: [{ description: 'Clear Sky' }]
    };
    component.city = mockCity;

    fixture.detectChanges();

    const cityName = fixture.nativeElement.querySelector('.city-name');
    const cityTemp = fixture.nativeElement.querySelector('.city-temp');

    expect(cityName.textContent).toContain('London');
    expect(cityTemp.textContent).toContain('15');
  });

  it('should emit the remove event when the remove button is clicked', () => {
    spyOn(component.remove, 'emit'); // Spy on the emit function

    const mockCity = {
      name: 'London',
      main: { temp: 15 },
      weather: [{ description: 'Clear Sky' }]
    };
    component.city = mockCity;

    fixture.detectChanges();

    const removeButton = fixture.debugElement.query(By.css('.remove-btn'));
    removeButton.triggerEventHandler('click', null);

    expect(component.remove.emit).toHaveBeenCalled();
  });

  it('should apply fade-out animation when city is removed', fakeAsync(() => {
    const mockCity = {
      name: 'London',
      main: { temp: 15 },
      weather: [{ description: 'Clear Sky' }]
    };
    component.city = mockCity;

    fixture.detectChanges();

    const removeButton = fixture.debugElement.query(By.css('.remove-btn'));
    removeButton.triggerEventHandler('click', null);

    tick(300);

    fixture.detectChanges();

    const cityElement = fixture.debugElement.query(By.css('.city-card'));
    expect(cityElement.nativeElement.style.opacity).toBe('');
  }));
});
