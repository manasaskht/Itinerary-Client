//Purpose: API call to free currency converter API
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
//Reference [1] starts
export class CurrencyService {
  endpoint="https://free.currencyconverterapi.com/api/v6/convert?compact=ultra&apiKey=63274fee5b0a4a4ec4c4&q=";
  httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'
})
};
  constructor(private http: HttpClient) {
    
   }

   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  //Method Description: fetches JSON response from API and returns to the caller in currencyconverter.component.ts
  getCurrency(src: any,dest: any): Observable<any> {
    return this.http.get(this.endpoint+src+'_'+dest).pipe(map(this.extractData));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //Reference [1] ends
}