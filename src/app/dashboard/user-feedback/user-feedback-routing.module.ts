import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFeedbackComponent } from '../user-feedback/user-feedback/user-feedback.component';



const routes: Routes = [
  { path: '', component: UserFeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFeedbackRoutingModule { }
