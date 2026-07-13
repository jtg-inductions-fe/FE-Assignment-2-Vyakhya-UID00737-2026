import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss']
})

export class ChipInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() inputId = 'chip-input';
  @Input() required = false;
  @Input() chips: string[] = [];
  @Output() chipsChange = new EventEmitter<string[]>();
  readonly separatorKeysCodes: number[] = [ENTER];

  isFocused = false;
  isTouched = false;

  get errorId(): string {
    return `${this.inputId}-error`;
  }

  get showRequiredError(): boolean {
    return (
      this.required &&
      this.isTouched &&
      !this.isFocused &&
      this.chips.length === 0
    );
  }

  addChip(event: MatChipInputEvent): void {
    const value = event.value.trim();
    if (!value) {
      event.chipInput?.clear();
      return;
    }
    const alreadyExists = this.chips.some(
      chip => chip.toLowerCase() === value.toLowerCase()
    );
    if (!alreadyExists) {
      this.chips = [...this.chips, value];
      this.chipsChange.emit(this.chips);
    }
    event.chipInput?.clear();
  }

  removeChip(chip: string): void {
    this.chips = this.chips.filter(
      currentChip => currentChip !== chip
    );
    this.chipsChange.emit(this.chips);
  }

  onBackspace(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (
      inputElement.value.length === 0 &&
      this.chips.length > 0
    ) {
      const lastChip = this.chips[this.chips.length - 1];
      this.removeChip(lastChip);
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    this.isTouched = true;
  }

  trackByChip(index: number, chip: string): string {
    return chip;
  }
}