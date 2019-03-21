import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';
import { _ } from 'underscore';

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

    addItineraryItem(itineraryId: string, title: string, description: string, dateTime: Date, category: string, location?: string, locationLatLng?: string) {
        let url = serverUrls.newItineraryItem;
        let body = {
            title,
            description,
            itineraryId,
            dateTime: dateTime.getTime(),
            category,
            location,
            locationLatLng
        };
        body = _.pick(body, _.identity);
        return this.http.post(url, body);
    }

    deleteItineraryItem(itineraryId: string, itemId: string) {
        let url = serverUrls.deleteItineraryItem;
        let params = {
            itineraryId,
            itemId
        };
        return this.http.delete(url, { params });
    }

    editItineraryItem(itemId: string, title?: string, description?: string, dateTime?: Date, category?: string, location?: string, locationLatLng?: string) {
        let url = serverUrls.editItineraryItem;
        let body = {
            itemId,
            title,
            description,
            dateTime: dateTime.getTime(),
            category,
            location,
            locationLatLng
        };
        body = _.pick(body, _.identity);
        return this.http.put(url, body);
    }

}
