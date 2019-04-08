import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { FooterModule } from '../shared/modules/footer/footer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatButtonModule, MatTabsModule, MatInputModule, MatSelectModule } from '@angular/material';
import { SideNavModule } from '../shared/modules/side-nav/side-nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

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
        ReactiveFormsModule,
        MatButtonModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule
    ]
})
export class DashboardModule { }
