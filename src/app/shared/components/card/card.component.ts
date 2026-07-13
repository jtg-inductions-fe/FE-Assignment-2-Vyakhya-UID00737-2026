import { Component, Input } from '@angular/core';

export interface CardDetails {
  name: string;
  price: string | number;
  avatar?: string;
  email?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() heading = '';
  @Input() details: CardDetails[] = [];
}
