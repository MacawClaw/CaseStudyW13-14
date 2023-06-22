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

}
