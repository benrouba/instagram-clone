import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { HttpClient, } from '@angular/common/http';

import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  get(url:any): Observable<any> {
    return this.http.get( url, { observe: "response" }).pipe(
      catchError(this.handleError<any>('Get' + url)));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.error instanceof ErrorEvent) {
      }
      else {
        switch (error.status) {
          case 0:
            console.log("error")
            break;
          case 400:
            console.log(error)
            break;
          case 403:
            console.log(error)
           
            break;
          case 401:
            console.log(error)
          
            break;
          
          case 500:
            console.log(error)
            
            break;
          case 504:
            console.log(error)
            
            break;
        }
      }
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
