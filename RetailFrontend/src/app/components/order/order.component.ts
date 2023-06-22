import { Component } from '@angular/core';
import { User } from '../../services/User';
import { Order } from '../../services/Order';
import { Product } from '../../services/Product';
import { DataGatewayService } from '../../services/data-gateway.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  // orderNumber!: number;
  // user!: User;
  // userLastName!: string;
  // email!: string; 
  // password!: string;
  // role!: string;

  // userId: undefined|number;
  // order!: any;
  // orderId!: any;
  // productList!: Product[];
  // orderMessage: undefined | string;

  // constructor(private productService: ProductService, private loginService:DataGatewayService, private route: ActivatedRoute, private orderService: OrderService){
  //   this.userId = loginService.userId;
  //   this.orderId = this.route.snapshot.paramMap.get('id');
  //   this.order = orderService.getOrder(this.orderId);    
  // }

  // ngOnInit(): void {
  //   this.getProduct();
  // }

  // getProduct() {
  //   this.productService.getProduct(this.productId).subscribe((result) => {
      
  //     if(result) {
  //       this.product=result;
  //     }
  //   })
  // }

  // isAdmin():boolean {
  //   return this.loginService.userRole=='ADMIN';
  // }

  // /*Submit adds to order*/
  // submit(){
  //   console.log(p);
  //   this.orderService.updateOrder(this.order).subscribe((result) => {
  //     console.log(result);
  //     if(result){
  //       this.orderMessage="Product added to cart";
  //     }
  //   });

  //   setTimeout(() => {
  //     this.orderMessage=undefined;
  //     this.route.navigateByUrl('/order');
  //   }, 2000);
  // }
}
