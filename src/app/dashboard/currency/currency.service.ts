import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  //endpoint = 'https://api.exchangeratesapi.io/latest?base=CAD&symbols=INR';
  //endpoint='http://data.fixer.io/api/latest?access_key=e1e291302d82c48da66782c0855dae52'
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

  getCurrency(src: any,dest: any): Observable<any> {
    return this.http.get('https://free.currencyconverterapi.com/api/v6/convert?compact=ultra&apiKey=63274fee5b0a4a4ec4c4&q='+src+'_'+dest).pipe(map(this.extractData));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}