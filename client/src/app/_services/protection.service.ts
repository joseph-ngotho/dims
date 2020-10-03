import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProtectionService {
  constructor(private http: HttpClient) {}

  // retrieving protection intervention
  getProtection(): Observable<any> {
    return this.http.get('/api/protection').pipe(catchError(this.handleError));
  }

  // get protection by id
  getProtectionById(id: number): Observable<any> {
    return this.http
      .get('/api/protection/' + id)
      .pipe(catchError(this.handleError));
  }

  //add
  addProtection(header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('/api/protection/', header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  //update
  updateProtection(id: number, header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('/api/protection/' + id, header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  // delete method
  deleteProtection(id: any) {
    return this.http
      .delete('/api/protection/' + id)
      .pipe(catchError(this.handleError));
  }

  //add protection dates
  addProtectionDates(header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('/api/protection_dates/', header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  //update
  updateProtectionDates(id: number, header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('/api/protection_dates/' + id, header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  //capture errors
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error:', errorResponse.error.message);
    } else {
      console.error('Server Side Error:', errorResponse);
    }
    return throwError(
      'There is an error with the service. Please notify your systems admin if it persists'
    );
  }
}
