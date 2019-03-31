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
        const url = serverUrls.createGroup;
        const body = {
            id,
            title
        };
        return this.http.post(url, body);
    }

    // Get a list of groups for currently logged-in user
    getGroups() {
        const url = serverUrls.getGroups;
        // The server already has the logged-in users information so nothing needs to be passed in body
        const body = {};
        return this.http.get(url, body);
    }

    // Add a member to a group
    addMember(friendId, itineraryId) {
        const url = serverUrls.addMember;
        const body = {
            friendId,
            itineraryId
        };
        return this.http.post(url, body);
    }

    // Get members of a group
    getMembers(groupName) {
        const url = serverUrls.getMembers;
        const params = {
            groupName
        };
        return this.http.get(url, { params });
    }
}
