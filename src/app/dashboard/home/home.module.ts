import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class HomeModule { }
