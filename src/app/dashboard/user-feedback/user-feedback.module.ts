import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFeedbackRoutingModule } from './user-feedback-routing.module';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RatingModule } from 'ng-starrating';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [UserFeedbackComponent],
  imports: [
    CommonModule,
    UserFeedbackRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    RatingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule


  ]
})
export class UserFeedbackModule { 
  MatInputModule
}
