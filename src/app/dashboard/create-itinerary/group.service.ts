import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  // Create a group for an itinerary. One itinerary has exactly one group associated with it
  createGroup(id: string, title: string) {
    let url = serverUrls.createGroup;
    let body = {
      id,
      title
    }
    return this.http.post(url, body);
  }

  // // Get a list of groups for currently logged-in user
  getGroups() {
    let url = serverUrls.getGroups;
    // The server already has the logged-in users information so nothing needs to be passed in body
    let body = {};
    return this.http.get(url, body);
  }
}
