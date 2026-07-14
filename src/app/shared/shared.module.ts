import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "./components/button/button.module";
import { DropdownModule } from "./components/dropdown/dropdown.module";
import { CardModule } from "./components/card/card.module";
import { ChipInputModule } from "./components/chip-input/chip-input.module";
import { FooterCardModule } from "./components/footer-card/footer-card.module";
import { InputModule } from "./components/input/input.module";
import { OrderCardModule } from "./components/order-card/order-card.module";
import { ReportCardModule } from "./components/report-card/report-card.module";
import { StatCardModule } from "./components/stat-card/stat-card.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        DropdownModule,
        CardModule,
        ChipInputModule,
        FooterCardModule,
        InputModule,
        OrderCardModule,
        ReportCardModule,
        StatCardModule
    ],
    exports: [
        CommonModule,
        ButtonModule,
        DropdownModule,
        CardModule,
        ChipInputModule,
        FooterCardModule,
        InputModule,
        OrderCardModule,
        ReportCardModule,
        StatCardModule
    ]
})

export class SharedModule{}