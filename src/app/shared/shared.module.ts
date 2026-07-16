import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CardComponent } from '@shared/components/card/card.component';
import { ChipInputComponent } from '@shared/components/chip-input/chip-input.component';
import { DropdownComponent } from '@shared/components/dropdown/dropdown.component';
import { InputComponent } from '@shared/components/input/input.component';
import { OrderCardComponent } from '@shared/components/order-card/order-card.component';
import { ReportCardComponent } from '@shared/components/report-card/report-card.component';
import { StatCardComponent } from '@shared/components/stat-card/stat-card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ChipInputComponent,
    DropdownComponent,
    InputComponent,
    OrderCardComponent,
    ReportCardComponent,
    StatCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    ChipInputComponent,
    DropdownComponent,
    InputComponent,
    OrderCardComponent,
    ReportCardComponent,
    StatCardComponent,
  ],
})
export class SharedModule {}
