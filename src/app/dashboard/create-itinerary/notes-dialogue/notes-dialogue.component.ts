import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesComponent } from '../notes/notes.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from '../notes/Note';
import { NotesService } from '../notes.service';
import { ToastrService } from 'ngx-toastr';



export interface DialogData {
    note: string;
    noteTitle: string;
    topNote: string;
    closeNote: string;
    noteData: Note;
    itineraryId: string;
}

@Component({
    selector: 'app-notes-dialogue',
    templateUrl: './notes-dialogue.component.html',
    styleUrls: ['./notes-dialogue.component.scss']
})
export class NotesDialogueComponent implements OnInit {

    createNoteForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<NotesComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, public noteService: NotesService, private toastr: ToastrService) {

        this.createNoteForm = new FormGroup({
            noteTitle: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            note: new FormControl('', [Validators.required, Validators.maxLength(100)])
        });
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addUpdateNote() {
        if (this.createNoteForm.invalid) {
            return;
        }

        let itemValues = this.createNoteForm.value;

        if (this.data.topNote === 'Create new note') {
            this.noteService.createNote(itemValues.noteTitle, itemValues.note, this.data.itineraryId).subscribe((items: any) => {
                this.toastr.success(items.message);
            });
            this.dialogRef.close();
        } else if (this.data.topNote === 'Update note') {
            this.noteService.updateNote(itemValues.noteTitle, itemValues.note, this.data.noteData.id).subscribe((items: any) => {
                this.toastr.success(items.message);
            });
            this.dialogRef.close();
        }
    }
}
