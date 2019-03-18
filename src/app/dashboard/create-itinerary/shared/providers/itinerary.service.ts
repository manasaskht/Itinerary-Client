import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
    providedIn: 'root'
})
export class ItineraryService {

    constructor(private http: HttpClient) { }

    listItineraries(itineraryId?: string) {
        let url = serverUrls.listItinerary;
        let params = itineraryId ? {
            itineraryId
        } : {};
        return this.http.get(url, { params });
    }

    listItineraryItems(itineraryId: string) {
        let url = serverUrls.listItineraryItems;
        let params = {
            itineraryId
        };
        return this.http.get(url, { params: params });
    }

    addItinerary(title: string, description: string) {
        let url = serverUrls.newItinerary;
        let body = {
            title,
            description
        };
        return this.http.post(url, body);
    }

    addItineraryItem(title: string, description: string, itineraryId: string) {
        let url = serverUrls.newItineraryItem;
        let body = {
            title,
            description,
            itineraryId
        };
        return this.http.post(url, body);
    }
}
