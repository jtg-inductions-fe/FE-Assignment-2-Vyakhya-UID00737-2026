import { Component, Input } from '@angular/core';
import { SocialIcons } from '../../../shared/models/footer.models';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss'],
})
export class FooterCardComponent {
  @Input() description = ``;
  @Input() icons: SocialIcons[] = [];
}
