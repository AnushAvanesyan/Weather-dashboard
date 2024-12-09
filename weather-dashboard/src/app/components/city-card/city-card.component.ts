import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),  // Initial state (fully visible)
        animate('300ms', style({ opacity: 0 }))  // Animation to fade out (opacity 0)
      ])
    ])
  ]
})
export class CityCardComponent {
  @Input() city: any;
  @Output() remove = new EventEmitter();
  onRemove() {
    this.remove.emit();
  }
  // onAnimationDone(event: any) {
  //   if (event.fromState === 'void') {
  //     // You can use this if you want to trigger any actions once the animation is done (optional)
  //   }
  // }

}
