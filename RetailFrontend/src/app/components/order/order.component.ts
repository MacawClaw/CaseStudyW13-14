import { Component } from '@angular/core';
import { User } from 'src/app/services/User';
import { Order } from 'src/app/services/Order';
import { Product } from 'src/app/services/Product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderNumber!: number;
  user!: User;
  userLastName!: string;
  email!: string; 
  password!: string;
  role!: string;
}
