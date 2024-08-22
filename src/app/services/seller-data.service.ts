import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerDataService {

  constructor(private http: HttpClient) { }
  signUpData(data:any) {
    return this.http.post('http://localhost:3000/sellerData',data)
  }

  loginData(params: any) {
    return this.http.get('http://localhost:3000/sellerData',{params})
  }
}
