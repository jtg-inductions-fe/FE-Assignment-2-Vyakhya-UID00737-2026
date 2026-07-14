import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from "./input.component";

@NgModule({
    declarations: [InputComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [InputComponent]
})

export class InputModule{}