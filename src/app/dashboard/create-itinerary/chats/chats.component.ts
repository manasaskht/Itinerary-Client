import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../ChatMessage';
import { ChatService } from '../chat.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { ItineraryService } from '../shared/providers/itinerary.service';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
    chatMessages: ChatMessage[];
    chatService: ChatService;
    activatedRoute: ActivatedRoute;
    itineraryService: ItineraryService;
    user: any;
    refreshInterval: number;
    interval: any;
    itineraryId: string;

    constructor(
        chatService: ChatService,
        activatedRoute: ActivatedRoute,
        itineraryService: ItineraryService
    ) {
        this.chatService = chatService;
        this.activatedRoute = activatedRoute;
        this.itineraryService = itineraryService;
        this.user = StorageHelper.getInstance().userInfo;
        this.refreshInterval = 2000;
        this.chatMessages = [];
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.itineraryId = params.id;
            this.getMessages();
        });
        this.interval = setInterval(this.getMessages.bind(this), this.refreshInterval);
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

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

}
