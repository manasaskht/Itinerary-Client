import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [
        CommonModule,
        FlexLayoutModule
    ]
})
export class FooterModule { }
