import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "";

  constructor(private http: HttpClient) { }

  userList() {
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/admin/users`);
  }

  deleteUser(id:number) {
    return this.http.delete(`${this.apiUrl}/api/v1/admin/deleteuser/${id}`, {responseType: 'text'});
  }

  getUser(id:string) {
    return this.http.get<User>(`${this.apiUrl}/api/v1/admin/users/${id}`);
  }

  updateStudent(user:User) {
    return this.http.put<User>(`${this.apiUrl}/api/v1/admin/saveuser`, user);
  }

}
