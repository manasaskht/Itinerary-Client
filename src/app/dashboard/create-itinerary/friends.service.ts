import { Injectable } from '@angular/core';
import { serverUrls } from '../../shared/utilities/app.urls.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  // Add a friend by providing an email ID
  addFriend(emailId: string) {
    let url = serverUrls.addFriend;
    let body = {
      emailId
    };

    return this.http.post(url, body);
  }

  // Get a list of friends of currently logged-in user
  getFriends() {
    let url = serverUrls.getFriends;
    // The server already has the logged-in users information so nothing needs to be passed in body
    let body = {};
    return this.http.get(url, body);
  }

  // Delete a friend fro the friends list
  deleteFriend(id: string) {
    let url = serverUrls.deleteFriends;
    let params = {id};
    return this.http.delete(url, {params: params});
  }
}
