import { Component, Inject } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Note } from '../notes/Note';

export interface DialogData {
  noteText: string;
  noteTitle: string;
  updatedAt: Date;
  username: string;
}

@Component({
  selector: 'app-view-notes-dialogue',
  templateUrl: './view-notes-dialogue.component.html',
  styleUrls: ['./view-notes-dialogue.component.scss']
})


export class ViewNotesDialogueComponent {

  constructor(public dialogRef: MatDialogRef<NotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
