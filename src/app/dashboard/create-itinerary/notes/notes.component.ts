import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NotesDialogueComponent } from '../notes-dialogue/notes-dialogue.component';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    notes: Array<any> = [];

    note: string;
    noteTitle: string;

    constructor(public dialog: MatDialog) {
        this.notes = [
            {
                id:123,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {   
                id:124,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {   
                id:125,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {
                id:126,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {   
                id:127,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },

            {   
                id:128,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },

            {   
                id:129,
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            }
        ];
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(NotesDialogueComponent, {
        height: '300px',
        width: '300px',
          data: {note: this.note, noteTitle: this.noteTitle}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.note = result;
        });
    }

    deleteItem(item): void {
         id : item.id;
    }

    editItem(item): void {
        
    }

    ngOnInit() {
    }

}
