// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class SellerDataService {

//   constructor(private http: HttpClient) { }
//   signUpData(data:any) {
//     return this.http.post('http://localhost:3000/sellerData',data)
//   }

//   loginData(params: any) {
//     return this.http.get('http://localhost:3000/sellerData',{params})
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerDataService {

  private baseUrl = 'http://localhost:3000/sellerData'; // Your JSON server endpoint

  constructor(private http: HttpClient) { }

  // Sign-up method
  signUpData(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Method to check if email already exists
  checkEmailExists(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.get<any[]>(this.baseUrl, { params });
  }

  // Login method
  loginData(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.get<any[]>(this.baseUrl, { params });
  }
}

