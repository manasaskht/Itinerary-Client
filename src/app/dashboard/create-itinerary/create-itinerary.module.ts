import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateItineraryRoutingModule } from './create-itinerary-routing.module';
import { CreateItineraryComponent } from './create-itinerary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatIconModule, MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';
import { NotesComponent } from './notes/notes.component';
import { ChatsComponent } from './chats/chats.component';
import { ItemDialogComponent } from './shared/components/item-dialog/item-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotesDialogueComponent } from './notes-dialogue/notes-dialogue.component';
import { ViewNotesDialogueComponent } from './view-notes-dialogue/view-notes-dialogue.component';

@NgModule({
    declarations: [CreateItineraryComponent, NotesComponent, ChatsComponent, ItemDialogComponent, NotesDialogueComponent, ViewNotesDialogueComponent],
    imports: [
        CommonModule,
        CreateItineraryRoutingModule,
        FlexLayoutModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule
    ],
    entryComponents: [ItemDialogComponent, NotesDialogueComponent, ViewNotesDialogueComponent]
})
export class CreateItineraryModule { }
