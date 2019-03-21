import { Injectable } from '@angular/core';
import { serverUrls } from 'src/app/shared/utilities/app.urls.helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }


    public registerUser(
        firstName: string,
        lastName: string,
        emailId: string,
        password: string,
        confirmPwd: string,
    ) {
        let url = serverUrls.register;
        let body = {
            firstName,
            lastName,
            emailId,
            password,
            confirmPwd
        };
        return this.http.post(url, body);
    }
}
