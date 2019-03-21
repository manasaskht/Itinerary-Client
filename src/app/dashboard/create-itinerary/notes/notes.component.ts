import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotesDialogueComponent } from '../notes-dialogue/notes-dialogue.component';
import { NotesService } from '../notes.service';
import { Note } from './Note'
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { ViewNotesDialogueComponent } from '../view-notes-dialogue/view-notes-dialogue.component';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss'],
    providers: [NotesService]
})
export class NotesComponent implements OnInit {

    itinerary: any;

    notes: Note[] = [];

    note: string;
    noteTitle: string;

    itineraryid: string;

    data: any;


    constructor(public dialog: MatDialog, private notesServie: NotesService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {

    }

    // Opens view note dialogue
    openViewNoteDialogue(note: Note) {
        var noteDate = new Date(note.updatedAt);
        var date = noteDate.toLocaleString();
        const dialogRef = this.dialog.open(ViewNotesDialogueComponent, {
            height: '500px',
            width: '600px',
            panelClass: 'view-dialog-container',

            data: { noteTitle: note.noteTitle, noteText: note.noteText, username: note.username, updatedAt: date }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The View dialogue was closed');

        });

    }

    // Open the pop-up dialogue to add notes/ edit-notes
    openDialog(mode: string, note: Note, topNote: string, close: string, event: MouseEvent): void {

        if (mode === 'update') {

            event.stopPropagation();

            const dialogRef = this.dialog.open(NotesDialogueComponent, {
                height: '400px',
                width: '400px',
                data: { note: note.noteText, noteTitle: note.noteTitle, topNote: topNote, closeNote: close, noteData: note }
            });

            dialogRef.afterClosed().subscribe(result => {
                // console.log('The dialog was closed');
                // if (result !== undefined) {
                //     this.note = result.noteText;
                //     this.noteTitle = result.noteTitle;
                //     if (this.noteTitle === undefined || this.note === undefined || this.noteTitle === '' || this.note === '') {
                //         this.toastr.error("Cannot update empty note !")
                //     } else if (this.noteTitle.length > 200 || this.note.length > 200) {
                //         this.toastr.error("Note should be less than 200 characters.")
                //     } else {
                //         this.updateNote(this.noteTitle, this.note, note.id)
                //     }
                // } else {
                //     console.log("Empty dialog closed")
                // }
                this.getItems(this.itineraryid);

            });

        } else if (mode === 'add') {

            const dialogRef = this.dialog.open(NotesDialogueComponent, {
                height: '400px',
                width: '400px',
                data: { note: undefined, noteTitle: undefined, topNote: topNote, closeNote: close, noteData: note, itineraryId: this.itineraryid }
            });

            dialogRef.afterClosed().subscribe(result => {
                // console.log('The dialog was closed');
                // if (result !== undefined) {
                //     this.note = result.noteText;
                //     this.noteTitle = result.noteTitle;
                //     if (this.noteTitle === undefined || this.note === undefined) {
                //         this.toastr.error("Cannot post empty note !")
                //     } else if (this.noteTitle.length > 200 || this.note.length > 200) {
                //         this.toastr.error("Note should be less than 200 characters.")
                //     } else {
                //         this.postNote(this.noteTitle, this.note, this.itineraryid);
                //     }
                // } else {
                //     console.log("Empty dialog closed")
                // }

                this.getItems(this.itineraryid);
            });

        }
    }



    // To get the list of the notes from the database
    getItems(id: string) {
        this.notesServie.getNotes(id).subscribe((items: any) => {
            this.notes = items;
        })
    }

    // To create new note in the ntinerary note section
    postNote(noteTitle: string, note: string, id: string) {
        this.notesServie.createNote(noteTitle, note, id).subscribe((items: any) => {
            this.toastr.success(items.message);
            this.getItems(this.itineraryid);
        })
    }

    // To delete the note from the itineraty
    deleteNote(uid: string, event: MouseEvent) {
        this.notesServie.deleteNote(uid).subscribe((items: any) => {
            this.toastr.success(items.message);
            this.getItems(this.itineraryid);
        })

        if (event) {
            event.stopPropagation();
        }

    }

    // To update a particular note in the itinerary
    updateNote(note: string, noteTitle: string, uid: string) {
        this.notesServie.updateNote(note, noteTitle, uid).subscribe((items: any) => {
            this.toastr.success(items.message);
            this.getItems(this.itineraryid);
        })
    }

    ngOnInit() {
        this.activatedRoute.params.pipe(flatMap(params => {
            return params.id;
        }))
            .subscribe(itineraryId => {
                this.itineraryid = itineraryId[0];
            })
        this.getItems(this.itineraryid);
    }

}
