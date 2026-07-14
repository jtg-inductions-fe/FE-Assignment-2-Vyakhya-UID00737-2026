import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { OrderCardComponent } from "./order-card.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
    declarations: [OrderCardComponent],
    imports: [
        MatTableModule,
        ButtonModule
    ],
    exports: [OrderCardComponent]
})

export class OrderCardModule{}