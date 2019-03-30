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
}
