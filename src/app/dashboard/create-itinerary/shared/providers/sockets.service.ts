import { Injectable } from '@angular/core';
import * as socketIOClient from 'socket.io-client';
import * as sailsIOClient from 'sails.io.js';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: null
})
export class SocketsService {
    io: any;
    chats: Subject<any>;
    notes: Subject<any>;
    timeline: Subject<any>;

    constructor() {
        this.io = sailsIOClient(socketIOClient);
        this.io.sails.url = 'http://localhost:1337';
        this.io.socket.headers = { Authorization: `Bearer ${StorageHelper.getInstance().userInfo.token}` }

        this.chats = new Subject<any>();
        this.notes = new Subject<any>();
        this.timeline = new Subject<any>();
    }

    connect() {
        this.io.socket.get('/socket/connect', (response) => {
            console.log('connected', response);
            this.io.socket.on('chat', (response) => {
                this.chats.next(response);
            });

            this.io.socket.on('note', (response) => {
                this.notes.next(response);
            });

            this.io.socket.on('timeline', (response) => {
                this.timeline.next(response);
            });
        });
    }

    getChats() {
        return this.chats;
    }

    getNotes() {
        return this.notes;
    }

    getTimeline() {
        return this.timeline;
    }
}
