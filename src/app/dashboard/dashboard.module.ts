import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { FooterModule } from '../shared/modules/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material';
import { SideNavModule } from '../shared/modules/side-nav/side-nav.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatTabsModule,MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        FooterModule,
        FlexLayoutModule,
        MatSidenavModule,
        SideNavModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
