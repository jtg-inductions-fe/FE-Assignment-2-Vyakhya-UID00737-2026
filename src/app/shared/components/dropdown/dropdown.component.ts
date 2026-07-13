import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface DropdownOptions {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() label = 'Select Option';
  @Input() options: DropdownOptions[] = [];
  @Input() selectedValue = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  onSelectionChange(value: string): void {
    this.selectedValue = value;
    this.selectedValueChange.emit(value);
  }
}