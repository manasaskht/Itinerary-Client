import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  addToItinerary(friendId: string, itineraryId: string) {
    let url = serverUrls.addToItinerary;
    let body = {
      friendId,
      itineraryId
    };
    return this.http.post(url, body);
  }
}
