import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataGatewayService } from '../../services/data-gateway.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private service: DataGatewayService, private router:Router){}
  
  isLoggedIn():boolean {
    return this.service.isLoggedIn;
  }

  isAdmin():boolean {
    return this.service.userRole=='ADMIN';
  }

  logout() {
    this.service.logout();
    
  }
}
