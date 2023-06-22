import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataGatewayService } from '../../services/data-gateway.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userFirstName:string | undefined;
  userRole:string | undefined;
  departmentList: string[] | undefined;

  constructor(private service: DataGatewayService, private router: Router){
    this.userFirstName = service.userFirstName;
    this.userRole = service.userRole;
    this.departmentList = service.departmentList;
  }
  ngOnInit(): void {
    
  }

  navigateToDepartment(department: string) {
    this.router.navigate(['/department', department]);
  }
  

  isLoggedIn():boolean {
    return this.service.isLoggedIn;
  }
}
