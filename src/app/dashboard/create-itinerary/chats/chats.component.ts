import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../ChatMessage';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { ItineraryService } from '../shared/providers/itinerary.service';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';
import { SocketsService } from '../shared/providers/sockets.service';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
    chatMessages: ChatMessage[];
    user: any;
    itineraryId: string;

    constructor(
        private chatService: ChatService,
        private activatedRoute: ActivatedRoute,
        private socketService: SocketsService
    ) {
        this.user = StorageHelper.getInstance().userInfo;
        this.chatMessages = [];
    }

    ngOnInit() {
        this.socketService.getChats().subscribe(res => {
            if (res.sender !== StorageHelper.getInstance().userInfo.id)
                this.chatMessages.unshift(new ChatMessage(res));
        });
        this.activatedRoute.params.subscribe(params => {
            this.itineraryId = params.id;
            this.getMessages();
        });
    }

    getMessages(): void {
        this.chatService.getMessages(this.itineraryId).subscribe((results: Array<any>) => {
            results.forEach(message => {
                if (this.chatMessages.findIndex(req => req.id === message.id) < 0) {
                    this.chatMessages.push(new ChatMessage(message));
                }
            });
            this.chatMessages.sort((a: ChatMessage, b: ChatMessage) => {
                return b.createdAt - a.createdAt;
            });
        });
    }

    sendMessage(input): void {
        this.chatService.sendMessage(input.value, this.itineraryId).subscribe(res => {
            this.getMessages();
        });
        input.value = '';
    }

}
