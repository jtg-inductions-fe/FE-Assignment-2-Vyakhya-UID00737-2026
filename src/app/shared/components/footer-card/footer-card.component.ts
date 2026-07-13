import { Component, Input } from '@angular/core';

export interface SocialIcons {
  icon: string;
}

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss']
})
export class FooterCardComponent {
  @Input() description='';
  @Input() icons: SocialIcons[] = [];
}
