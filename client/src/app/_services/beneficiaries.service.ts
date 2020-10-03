import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BeneficiariesService {
  constructor(private http: HttpClient) {}

  // retrieving beneficiaries
  getBeneficiaries(): Observable<any> {
    return this.http
      .get('/api/beneficiaries')
      .pipe(catchError(this.handleError));
  }

  // get beneficiaries by id
  getHBeneficiariesById(id: number): Observable<any> {
    return this.http
      .get('/api/beneficiaries/' + id)
      .pipe(catchError(this.handleError));
  }

  // get beneficiaries by id + interventions
  getHBeneficiaryById(id: number): Observable<any> {
    return this.http
      .get('/api/beneficiary/' + id)
      .pipe(catchError(this.handleError));
  }

  //add beneficiaries method
  addBeneficiary(newBeneficiary: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('/api/beneficiaries', newBeneficiary, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  //update
  updateBeneficiary(id: number, header: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('/api/beneficiaries/' + id, header, { headers: headers })
      .pipe(catchError(this.handleError));
  }

  // delete method
  deleteBeneficiary(id: any) {
    return this.http
      .delete('/api/beneficiaries/' + id)
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
