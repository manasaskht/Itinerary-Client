import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';

import { CreateItineraryRoutingModule } from './create-itinerary-routing.module';
import { CreateItineraryComponent } from './create-itinerary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatIconModule, MatButtonModule,MatDialogModule } from '@angular/material';
import { NotesComponent } from './notes/notes.component';
import { ChatsComponent } from './chats/chats.component';
import {FormsModule} from '@angular/forms';
import { NotesDialogueComponent } from './notes-dialogue/notes-dialogue.component';

@NgModule({
    declarations: [CreateItineraryComponent, NotesComponent, ChatsComponent, NotesDialogueComponent],
    imports: [
        CommonModule,
        CreateItineraryRoutingModule,
        FlexLayoutModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
        MatDialogModule
    ],
    entryComponents: [NotesComponent, NotesDialogueComponent],
    bootstrap: [NotesComponent],
    providers: []
})
export class CreateItineraryModule { }
