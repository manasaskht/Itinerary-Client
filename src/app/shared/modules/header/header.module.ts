import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class HeaderModule { }
