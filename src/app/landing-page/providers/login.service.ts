import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    public userLogin(email: string, password: string) {
        let url = serverUrls.login;
        let body = {
            email,
            password
        };
        return this.http.post(url, body);
    }

    public forgotPassword(email: string) {
        let url = serverUrls.forgotPwd;
        let body = {
            email
        };
        return this.http.post(url, body);
    }

}
