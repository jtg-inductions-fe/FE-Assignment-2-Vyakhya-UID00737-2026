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

  isOpen = false;

  get selectedLabel(): string {
    return (
      this.options.find(
        option => option.value === this.selectedValue
      )?.label ?? 'Select Option'
    );
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: DropdownOptions): void {
    this.selectedValue = option.value;
    this.selectedValueChange.emit(option.value);
    this.isOpen = false;
  }
}
