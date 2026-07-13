import { Component, Input, EventEmitter, Output } from '@angular/core';
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
export class ReportCardComponent {
  @Input() heading = '';
  @Input() description = '';
  @Input() buttons: ReportCardButton[] = [];
  @Output() selectedOption = new EventEmitter<ReportCardButton>();
  selected = '';

  dropdownOptions = [
    {
    label:'a',value:'a'
  }
  ,
  {
    label:'b',value:'b'
  }
]

  // get dropdownOptions(): DropdownOptions[] {
  //   const a=  this.buttons.map((button, index) => ({
  //     label: button.label,
  //     value: button.value ?? index.toString()
  //   }));
  //   console.log(a);
  //   return a;
  // }

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
