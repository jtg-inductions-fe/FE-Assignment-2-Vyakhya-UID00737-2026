import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputComponent } from './components/input/input.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';

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
