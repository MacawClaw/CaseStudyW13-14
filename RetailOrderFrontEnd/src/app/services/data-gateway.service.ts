import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginInfo } from './LoginInfo';
import { User } from './User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class DataGatewayService {

  private apiUrl = 'http://localhost:8080';
  //private apiUrl = '';
  userId: undefined | number;
  userFirstName: undefined | string;
  userLastName: undefined | string;
  userRole: undefined | string;
  userPhoneNumber: undefined | string;
  userAddress: undefined | string;
  departmentList: string[] = ['Shirts', 'Shoes', 'Accessories', 'Pants'];
  isLoggedIn!: boolean;

  //constructor() { }
  
  constructor(private http: HttpClient, private router: Router) { }

  getLoginStatus(loginData: LoginInfo) {
    console.log(loginData);

    this.http.post(`${this.apiUrl}/api/auth/login`, loginData).subscribe((resultData: any) => {
    //console.log(resultData);
    
    if (resultData.message == "Email does not exist") {
      alert("Email does not exist");
    }   
    else if (resultData.message == "Login Success") {
      this.userId = resultData.id;
      this.userFirstName = resultData.fullName;
      this.userLastName = resultData.fullName;
      this.userRole = resultData.role;
      this.userPhoneNumber = resultData.userPhoneNumber;
      this.userAddress = resultData.userAddress;
      this.isLoggedIn = true;
      //console.log(this.isLoggedIn +  "   hgsadjhgshdjfgh");
      /*console.log(resultData.fullName);
      console.log(resultData.id);
      console.log(resultData.role);*/
      this.router.navigateByUrl('/home');
    }
    else {
      alert("Incorrect email or password");
    }  
  });
  }

  getAccountRegistered(accountRegistration: User): Observable<any> {
    console.log(accountRegistration);
    return this.http.post(`${this.apiUrl}/api/auth/register`, accountRegistration, {responseType: 'text'});
  }

  logout() {
    this.userId = undefined;
    this.userFirstName = undefined;
    this.userLastName = undefined;
    this.userRole = undefined;
    this.userPhoneNumber = undefined;
    this.userAddress = undefined;
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
