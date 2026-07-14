import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { DropdownComponent } from "./dropdown.component";

@NgModule({
    declarations: [DropdownComponent],
    imports: [MatSelectModule],
    exports: [DropdownComponent]
})

export class DropdownModule{}