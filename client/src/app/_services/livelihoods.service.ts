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
export class LivelihoodsService {
  constructor(private http: HttpClient) {}

  // retrieving livelihoods intervention
  getLivelihoods(): Observable<any> {
    return this.http.get('/api/livelihoods').pipe(catchError(this.handleError));
  }

  // get beneficiaries by id
  getLivelihoodsById(id: number): Observable<any> {
    return this.http
      .get('/api/livelihoods/' + id)
      .pipe(catchError(this.handleError));
  }

  //add
  addLivelihoods(header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('/api/livelihoods/', header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  //update
  updateLivelihoods(id: number, header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('/api/livelihoods/' + id, header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  // delete method
  deleteLivelihoods(id: any) {
    return this.http
      .delete('/api/beneficiaries/' + id)
      .pipe(catchError(this.handleError));
  }

  //add livelihood dates
  addLivelihoodsDates(header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('/api/livelihoods_dates/', header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  //update
  updateLivelihoodsDates(id: number, header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('/api/livelihoods_dates/' + id, header, { headers: headers })
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
