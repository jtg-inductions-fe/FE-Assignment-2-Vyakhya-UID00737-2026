import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOptions } from '../../models/dropdown.models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() label = 'Select Option';
  @Input() options: DropdownOptions[] = [];
  @Input() selectedValue = '';
  @Output() selectedValueChange = new EventEmitter<string>();

<<<<<<< HEAD
  onSelectionChange(value: string): void {
    this.selectedValue = value;
    this.selectedValueChange.emit(value);
  }
}
<<<<<<< HEAD
=======
=======
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
>>>>>>> b77cf17 (VN_A2_01: dropdown component added)
>>>>>>> acc4ceb (VN_A2_01: dropdown component added)
