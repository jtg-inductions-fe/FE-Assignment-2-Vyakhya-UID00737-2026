import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) control!: FormControl;
  @Input() placeholder = '';
  @Input({ required: true }) inputId!: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() onError: Record<string, string> = {};

  get showError(): boolean {
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get errorMessage(): string {
    const error = this.control.errors;
    if (!error) return '';
    const errorKey = Object.keys(error)[0];

    return this.onError[errorKey] ?? 'Invalid value!';
  }
}
