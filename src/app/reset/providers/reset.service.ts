import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
    providedIn: 'root'
})
export class ResetService {

    constructor(
        private http: HttpClient
    ) {
    }

    resetPassword(password, confirmPwd, token) {
        let url = serverUrls.resetPwd;
        let body = {
            password,
            confirmPwd,
            token
        };
        return this.http.post(url, body);
    }
}
