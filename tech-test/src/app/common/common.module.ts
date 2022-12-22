import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { DialogComponent } from "./dialog/dialog.component";
import { ButtonComponent } from "./button/button.component";
import { InputComponent } from "./input/input.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ConfirmComponent } from "./confirm/confirm.component";

@NgModule({
  declarations: [
    DialogComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    ConfirmComponent,
  ],
  exports: [
    DialogComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    ConfirmComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class AppCommonModule {}
