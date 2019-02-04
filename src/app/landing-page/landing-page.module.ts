import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatTabsModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterModule } from '../shared/modules/footer/footer.module';

@NgModule({
    declarations: [LandingPageComponent, LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        FlexLayoutModule,
        MatButtonModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FooterModule
    ]
})
export class LandingPageModule { }
