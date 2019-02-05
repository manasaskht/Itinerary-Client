import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    notes: Array<any> = [];

    constructor() {
        this.notes = [
            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },
            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },

            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            },

            {
                title: 'Catch flight to South Africa',
                text: 'The flight leaves at 10:30a.m. and will reach around 7:30p.m.',
                time: new Date().getTime()
            }
        ];
    }

    ngOnInit() {
    }

}
