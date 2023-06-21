import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './Order';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = "";

  constructor(private http: HttpClient) { }

  addOrder(data:Order) {
    return this.http.post(`${this.apiUrl}/api/v1/admin/saveorder`,data, {responseType: 'text'});
  }

  orderList() {
    return this.http.get<Order[]>(`${this.apiUrl}/api/v1/admin/orders`);
  }

  deleteOrder(id:number) {
    return this.http.delete(`${this.apiUrl}/api/v1/admin/deleteorder/${id}`, {responseType: 'text'});
  }

  getOrder(id:string) {
    return this.http.get<Order>(`${this.apiUrl}/api/v1/admin/orders/${id}`)
  }

  updateOrder(order:Order) {
    return this.http.put<Order>(`${this.apiUrl}/api/v1/admin/saveorder`, order);
  }

  /*
  enrollCourse(orderId:number, userId:number){
    let bodyData:any;
    console.log(orderId);
    console.log(userId);
    this.http.post(`${this.apiUrl}/api/v1/admin/savecoursestudent/${orderId}/${userId}`, bodyData, {responseType: 'text'})
    .subscribe((result) => {
      console.log(result);
    });    
  }

  isStudentAlreadyEnrolled(orderId:number, userId: number) {
    
    return this.http.get(`${this.apiUrl}/api/v1/admin/isstudentenrolled/${orderId}/${userId}`);
    
  }
  */

}
