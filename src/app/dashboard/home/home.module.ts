import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ItineraryDialogComponent } from '../create-itinerary/shared/components/itinerary-dialog/itinerary-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent, ItineraryDialogComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    entryComponents: [ItineraryDialogComponent]
})
export class HomeModule { }
