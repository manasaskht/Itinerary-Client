import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateItineraryRoutingModule } from './create-itinerary-routing.module';
import { CreateItineraryComponent } from './create-itinerary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatTabsModule, MatIconModule, MatButtonModule, MatDialogModule,
    MatInputModule, MatSelectModule, MatAutocompleteModule
} from '@angular/material';
import { NotesComponent } from './notes/notes.component';
import { ChatsComponent } from './chats/chats.component';
import { ItemDialogComponent } from './shared/components/item-dialog/item-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotesDialogueComponent } from './notes-dialogue/notes-dialogue.component';
import { ViewNotesDialogueComponent } from './view-notes-dialogue/view-notes-dialogue.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ItemViewDialogComponent } from './shared/components/item-view-dialog/item-view-dialog.component';
import { SocialComponent } from './social/social.component';
import { MatCardModule } from '@angular/material/card';
import { SocketsService } from './shared/providers/sockets.service';

@NgModule({
    declarations: [
        CreateItineraryComponent,
        NotesComponent,
        ChatsComponent,
        ItemDialogComponent,
        NotesDialogueComponent,
        ViewNotesDialogueComponent,
        ItemViewDialogComponent,
        SocialComponent
    ],
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
        FormsModule,
        MatSelectModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatAutocompleteModule,
        MatCardModule
    ],
    entryComponents: [
        ItemDialogComponent,
        NotesDialogueComponent,
        ViewNotesDialogueComponent,
        ItemViewDialogComponent,
        SocialComponent
    ],
    providers: [
        SocketsService
    ]
})
export class CreateItineraryModule { }
