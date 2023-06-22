import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/User';
import { DataGatewayService } from '../../services/data-gateway.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userFirstName!: string;
  userLastName!: string;
  email!: string; 
  password!: string;
  role: string = "USER";
  phoneNumber!: string;
  address!: string;
  registrationMessage:string|undefined;

  constructor(private router: Router,private dataService: DataGatewayService){}
  

  save() {

    const accountRegistration: User = {
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      email: this.email,
      password: this.password,
      role: this.role,
      userPhoneNumber: this.phoneNumber,
      userAddress: this.address

    };

    console.log(accountRegistration);

    let resultData: any =
      this.dataService.getAccountRegistered(accountRegistration).subscribe((accountRegistration) => resultData);
    
    this.registrationMessage = "Registered Successfully";
   
    setTimeout(() => {
      this.registrationMessage = undefined;
      this.router.navigateByUrl('/login');
    }, 2000);
    //console.log(resultData);
    
  }

}
