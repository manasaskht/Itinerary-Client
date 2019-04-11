import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../shared/modules/footer/footer.module';

@NgModule({
    declarations: [ResetComponent],
    imports: [
        CommonModule,
        ResetRoutingModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FooterModule
    ]
})
export class ResetModule { }
