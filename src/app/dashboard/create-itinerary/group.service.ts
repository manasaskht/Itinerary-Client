import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  createGroup(id: string, title: string) {
    let url = serverUrls.createGroup;
    let body = {
      id,
      title
    }
    return this.http.post(url, body);
  }

  getGroups() {
    let url = serverUrls.getGroups;
    let body = {};
    return this.http.get(url, body);
  }
}
