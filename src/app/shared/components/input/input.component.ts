import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() text = '';
  @Input() inputId = '';
  @Input() value = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() required = false;
  @Output() valueChange = new EventEmitter<string>();

  isFocused = false;
  isTouched = false;

  get showRequiredError(): boolean {
    return (
      this.required &&
      this.isTouched &&
      !this.isFocused &&
      !this.value.trim()
    );
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    this.isTouched = true;
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }
}