import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
})
export class ChipInputComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) inputId!: string;
  @Input({ required: true }) control!: FormControl<string[] | null>;
  @Input() required = false;
  @Output() chipsChange = new EventEmitter<string[]>();
  @Input() onError: Record<string, string> = {};
  readonly separatorKeysCodes: number[] = [ENTER];

  isFocused = false;

  get errorId(): string {
    return `${this.inputId}-error`;
  }

  get showError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get errorMessage(): string {
    const error = this.control.errors;
    if (!error) return '';
    const errorKey = Object.keys(error)[0];
    return this.onError[errorKey] ?? 'Invalid value!';
  }

  get chips(): string[] {
    return this.control.value ?? [];
  }

  addChip(event: MatChipInputEvent): void {
    const value = event.value.trim();
    if (!value) {
      event.chipInput?.clear();
      return;
    }
    const alreadyExists = this.chips.some(chip => chip.toLowerCase() === value.toLowerCase());

    if (!alreadyExists) {
      const updatedChips = [...this.chips, value];
      this.control.setValue(updatedChips);
      this.control.markAsDirty();
      this.control.updateValueAndValidity();
      this.chipsChange.emit(updatedChips);
    }
    event.chipInput?.clear();
  }

  removeChip(chip: string): void {
    const updatedChips = this.chips.filter(currentChip => currentChip !== chip);
    this.control.setValue(updatedChips);
    this.control.markAsDirty();
    this.control.updateValueAndValidity();
    this.chipsChange.emit(updatedChips);
  }

  onBackspace(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length === 0 && this.chips.length > 0) {
      const lastChip = this.chips[this.chips.length - 1];
      this.removeChip(lastChip);
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    this.control.markAsTouched();
    this.control.updateValueAndValidity();
  }

  trackByChip(index: number, chip: string): string {
    return chip;
  }
}
