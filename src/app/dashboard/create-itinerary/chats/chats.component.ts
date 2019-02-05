import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
    chatMessages: Array<any>;

    constructor() {
        this.chatMessages = [
            {
                from: 'Abc',
                text: 'hello there',
            },
            {
                from: 'Xyz',
                text: 'hi',
            },
            {
                from: 'Abc',
                text: 'lets create itinerary here',
            },
            {
                from: 'Xyz',
                text: 'sure',
            }, {
                from: 'You',
                text: 'Ok, I agree.',
            }
        ];
    }

    ngOnInit() {
    }

}
