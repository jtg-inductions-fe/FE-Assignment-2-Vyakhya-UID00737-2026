import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DropdownOptions } from '../dropdown/dropdown.component';

export interface ReportCardButton {
  label: string;
  icon?: string;
  variant: 'filled' | 'outlined';
  value?: string;
}

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})

export class ReportCardComponent implements OnChanges {
  @Input() heading = '';
  @Input() description = '';
  @Input() buttons: ReportCardButton[] = [];
  @Output() selectedOption = new EventEmitter<ReportCardButton>();
  dropdownOptions: DropdownOptions[] = [];
  selected = '';

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['buttons']) {
    this.dropdownOptions = this.buttons.map((button, index) => ({
      label: button.label,
      value: button.value ?? index.toString()
    }));
    if (!this.selected && this.dropdownOptions.length > 0) {
      this.selected = this.dropdownOptions[0].value;
    }
  }
}

  onDropdownChange(value: string): void {
    this.selected = value;
    const selectedButton = this.buttons.find(
      (button, index) =>
        (button.value ?? index.toString()) === value
    );
    if (selectedButton) {
      this.selectedOption.emit(selectedButton);
    }
  }

  onButtonClick(button: ReportCardButton): void {
    this.selectedOption.emit(button);
  }
}