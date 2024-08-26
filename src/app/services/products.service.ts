import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
private baseUrl = 'http://localhost:3000/product';
   getData() {
  return this.http.get('http://localhost:3000/product')   
  }
  getServiceData() {
    return this.http.get('http://localhost:3000/product')
  }
  deleteUserById(id:any) {
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${user.id}`, user);
  }
  
  // deleteTodoById(id:any) {
  //   return this.http.delete(`http://localhost:3000/todos/${id}`)
  // }

  // addUserdetails(user:any) {
  //   return this.http.post(`http://localhost:3000/users`,user)
  // }
}
