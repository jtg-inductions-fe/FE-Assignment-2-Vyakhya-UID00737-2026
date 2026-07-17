import { Component, Input } from '@angular/core';
import { CardDetails } from '../../models/card.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() heading = '';
  @Input() details: CardDetails[] = [];
}
