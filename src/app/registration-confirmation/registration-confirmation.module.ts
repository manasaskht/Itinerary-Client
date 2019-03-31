import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatButtonModule } from "@angular/material";

import { RegistrationConfirmationRoutingModule } from "./registration-confirmation-routing.module";
import { RegistrationConfirmationComponent } from "./registration-confirmation.component";
import { FooterModule } from "../shared/modules/footer/footer.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [RegistrationConfirmationComponent],
  imports: [
    CommonModule,
    FooterModule,
    RegistrationConfirmationRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class RegistrationConfirmationModule {}
