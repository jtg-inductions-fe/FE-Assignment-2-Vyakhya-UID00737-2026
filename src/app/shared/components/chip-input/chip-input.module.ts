import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { ChipInputComponent } from "./chip-input.component";

@NgModule({
    declarations: [ChipInputComponent],
    imports: [
        MatFormFieldModule,
        MatChipsModule
    ],
    exports: [ChipInputComponent]
})

export class ChipInputModule{}