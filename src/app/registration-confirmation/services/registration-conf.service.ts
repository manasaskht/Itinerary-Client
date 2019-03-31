import { Injectable } from "@angular/core";
import { HttpResponse, HttpHeaders, HttpClient } from "@angular/common/http";
import { serverUrls } from "src/app/shared/utilities/app.urls.helper";

@Injectable({
  providedIn: "root"
})
export class RegistrationConfService {
  constructor(private http: HttpClient) {}

  activateUser(userId: string, token: string) {
    let url = serverUrls.activateUser;

    let params = {
      userId,
      token
    };

    return this.http.get(url, { params: params });
  }
}
