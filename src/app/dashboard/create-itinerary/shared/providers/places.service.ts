import { Injectable } from '@angular/core';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    constructor(private http: HttpClient) { }

    getPlaces(query: string) {
        let url = serverUrls.googlePlaces;
        let params = {
            input: query,
            key: serverUrls.googleApiKey
        };
        return this.http.get<any[]>(url, { params });
    }
}
