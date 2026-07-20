import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ReportCardButton } from '../../models/card.models';
import { DropdownOptions } from '../../models/dropdown.models';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
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
      this.dropdownOptions = this.buttons.map(button => ({
        label: button.label,
        value: button.value,
      }));
      if (!this.selected && this.dropdownOptions.length > 0) {
        this.selected = this.dropdownOptions[0].value;
      }
    }
  }

  onDropdownChange(value: string): void {
    this.selected = value;
    const selectedButton = this.buttons.find(button => button.value === value);
    if (selectedButton) {
      this.selectedOption.emit(selectedButton);
    }
  }

  onButtonClick(button: ReportCardButton): void {
    this.selectedOption.emit(button);
  }
}
