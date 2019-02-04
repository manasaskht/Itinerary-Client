import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MatButtonModule,
        FlexLayoutModule,
        MatIconModule
    ]
})
export class ProfileModule { }
