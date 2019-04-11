import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';
import { Observable, of } from 'rxjs';
import { DialogData } from 'src/app/dashboard/profile/edit-profile/edit-profile.component';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    public userProfileFetch() {
        let url = serverUrls.fetchProfile;
        return this.http.get(url);
    }

    public userImageFetch() {
        let url = serverUrls.fetchImage;
        return this.http.get(url, { responseType: 'blob' });
    }

    public updateProfile(data: DialogData) {
        let url = serverUrls.updateProfile;
        return this.http.post(url, data);
    }

    saveProfile(userPhoto: File): Observable<any> {
        let url = serverUrls.saveProfile;
        let headers = new HttpHeaders();
        const formData: FormData = new FormData();
        formData.append('userPhoto', userPhoto);
        return this.http.post(url, formData);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
