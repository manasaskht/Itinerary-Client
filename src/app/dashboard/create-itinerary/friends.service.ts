import { Injectable } from '@angular/core';
import { serverUrls } from '../../shared/utilities/app.urls.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  addFriend(emailId: string) {
    let url = serverUrls.addFriend;
    let body = {
      emailId
    };

    return this.http.post(url, body);
  }

  getFriends() {
    let url = serverUrls.getFriends;
    let body = {};
    return this.http.get(url, body);
  }
}
