import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private http: HttpClient) { }

    addToItinerary(friendId: string, itineraryId: string) {
        const url = serverUrls.addToItinerary;
        const body = {
            friendId,
            itineraryId
        };
        return this.http.post(url, body);
    }

    addGroupToItinerary(groupName: string, itineraryId: string) {
        const url = serverUrls.addGroupToItinerary;
        const body = {
            groupName,
            itineraryId
        };
        return this.http.post(url, body);
    }

    removeFromItinerary(itineraryId, friendId) {
        const url = serverUrls.removeMembers;
        const params = {
            itineraryId,
            friendId
        };
        return this.http.delete(url, { params: params });
    }

    sendMessage(message: string, itineraryId: string) {
        const url = serverUrls.sendMessage;
        const body = {
            message,
            itineraryId
        };
        return this.http.post(url, body);
    }

    getMessages(itineraryId: string) {
        const url = serverUrls.getMessages;
        const params = {
            itineraryId
        };
        return this.http.get(url, { params: params });
    }
}
