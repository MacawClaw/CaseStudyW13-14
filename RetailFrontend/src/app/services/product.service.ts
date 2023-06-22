import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  productList() {
    return this.http.get<Product[]>(`${this.apiUrl}/api/v1/admin/products`);
  }

  deleteProduct(id:number) {
    return this.http.delete(`${this.apiUrl}/api/v1/admin/deleteproduct/${id}`, {responseType: 'text'});
  }

  getProduct(id:string) {
    return this.http.get<Product>(`${this.apiUrl}/api/v1/admin/products/${id}`);
  }

  updateProduct(product:Product) {
    return this.http.put<Product>(`${this.apiUrl}/api/v1/admin/saveproduct`, product);
  }

}
