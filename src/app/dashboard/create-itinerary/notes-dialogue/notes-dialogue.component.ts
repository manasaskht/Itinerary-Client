import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NotesComponent } from '../notes/notes.component';

export interface DialogData {
  note: string;
  noteTitle: string;
}

@Component({
  selector: 'app-notes-dialogue',
  templateUrl: './notes-dialogue.component.html',
  styleUrls: ['./notes-dialogue.component.scss']
})
export class NotesDialogueComponent {

  constructor(public dialogRef: MatDialogRef<NotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
