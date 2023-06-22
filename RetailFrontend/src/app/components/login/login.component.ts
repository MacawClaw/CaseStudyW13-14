import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginInfo } from '../../services/LoginInfo';
import { DataGatewayService } from '../../services/data-gateway.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string; 
  password!: string;
  errorMessage:undefined|string;

  constructor(private http: HttpClient, private router: Router, private dataService: DataGatewayService){}

  onSubmit() {
    if (!this.email || !this.password) {
      //alert('Missing email or password.')
      this.errorMessage="Missing email or password.";
      setTimeout(() => {
        this.errorMessage=undefined;
      }, 2000);
      return;
    }

    
    
    let bodyData: LoginInfo = {
      email: this.email,
      password: this.password,
    };

    console.log(bodyData);
    
    this.dataService.getLoginStatus(bodyData);
  }

}
