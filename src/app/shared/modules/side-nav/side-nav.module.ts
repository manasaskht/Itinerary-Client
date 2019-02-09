import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SideNavComponent],
    exports: [SideNavComponent],
    imports: [
        CommonModule,
        MatListModule,
        RouterModule
    ]
})
export class SideNavModule { }
