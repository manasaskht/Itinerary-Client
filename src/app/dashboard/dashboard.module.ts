import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { FooterModule } from '../shared/modules/footer/footer.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        FooterModule
    ]
})
export class DashboardModule { }
