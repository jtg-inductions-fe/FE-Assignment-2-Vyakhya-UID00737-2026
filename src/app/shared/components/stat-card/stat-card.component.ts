import { Component, Input } from '@angular/core';
import { StatCardData } from '@shared/models/card.models';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() cards: StatCardData[] = [];
}
