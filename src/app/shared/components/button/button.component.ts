import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

// taking input of needed properties
export class ButtonComponent {
  @Input() label = '';
  @Input() variant: 'filled' | 'outlined' = 'filled';
  @Input() icon = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() borderRadius: 'sm' | 'md' | 'lg' = 'md';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

  @Output() buttonClick = new EventEmitter<void>();
  onClick():void {
    this.buttonClick.emit();
  }
}
