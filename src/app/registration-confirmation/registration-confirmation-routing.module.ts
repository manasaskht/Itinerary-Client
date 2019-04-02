import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationConfirmationComponent } from "../registration-confirmation/registration-confirmation.component";

const routes: Routes = [
  {
    path: "",
    component: RegistrationConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationConfirmationRoutingModule {}
