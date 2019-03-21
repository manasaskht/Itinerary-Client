import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
    declarations: [ProfileComponent, EditProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        MatButtonModule,
        FlexLayoutModule,
        MatIconModule,
        MatDialogModule
    ],
    entryComponents: [ EditProfileComponent ]
})
export class ProfileModule { }
