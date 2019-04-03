import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [PrintComponent],
    imports: [
        CommonModule,
        PrintRoutingModule,
        FlexLayoutModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class PrintModule { }
