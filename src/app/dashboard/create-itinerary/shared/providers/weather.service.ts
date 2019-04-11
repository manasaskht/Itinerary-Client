/*****************************************************************************************************************************
Author:             Nitish Bhardwaj
Code Description:   Services typscript file for weather forecast. This contains the definition of the API end point.
                    This service is called from component.ts file for the API call.
Last update date:   23-Mar-2019
******************************************************************************************************************************/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient) { }
    //Reference of API: https://openweathermap.org/api
    endpoint = "https://api.openweathermap.org/data/2.5/forecast?appid=70e4087982bcdbef8e32b7927fcab47b&units=metric&q=";
    app_id = "70e4087982bcdbef8e32b7927fcab47b";
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    getWeather(city: any) {
        return this.http.get(this.endpoint + city);
    }

}
