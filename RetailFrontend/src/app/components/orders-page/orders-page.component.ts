import { Component } from '@angular/core';
import { User } from '../../services/User';
import { Order } from '../../services/Order';
import { Product } from '../../services/Product';
import { DataGatewayService } from '../../services/data-gateway.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent {

  // order!: any;
  // orderId!: any;
  // productList!: Product[];
  // productMessage: undefined | string;
  // /*iconDelete=faTrash;
  // iconEdit=faEdit;*/
  // userId: undefined|number;
  // deptId!: number;

  // constructor(private productService: ProductService, private loginService:DataGatewayService, private route: ActivatedRoute, private orderService: OrderService){
  //   this.userId = loginService.userId;
  //   this.orderId = this.route.snapshot.paramMap.get('id');
  //   this.order = orderService.getOrder(this.orderId);    
  // }

  // ngOnInit(): void {
  //   this.list();
  // }

  // list() {
  //   this.orderService.getOrder().subscribe((result) => {
      
  //     if(result) {
  //       this.productList=result.productList;
  //     }
  //   })
  // }

  // isAdmin():boolean {
  //   return this.loginService.userRole=='ADMIN';
  // }

}
