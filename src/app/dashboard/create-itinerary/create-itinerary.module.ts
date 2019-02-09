import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateItineraryRoutingModule } from './create-itinerary-routing.module';
import { CreateItineraryComponent } from './create-itinerary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NotesComponent } from './notes/notes.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
    declarations: [CreateItineraryComponent, NotesComponent, ChatsComponent],
    imports: [
        CommonModule,
        CreateItineraryRoutingModule,
        FlexLayoutModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class CreateItineraryModule { }
