import { NgModule } from "@angular/core";
import { ReportCardComponent } from "./report-card.component";
import { ButtonModule } from "../button/button.module";
import { DropdownModule } from "../dropdown/dropdown.module";

@NgModule({
    declarations: [ReportCardComponent],
    imports: [
        ButtonModule,
        DropdownModule
    ],
    exports: [ReportCardComponent]
})

export class ReportCardModule{}