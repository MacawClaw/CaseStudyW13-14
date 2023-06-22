import { Component } from '@angular/core';
import { User } from '../../services/User';
import { Order } from '../../services/Order';
import { Product } from '../../services/Product';
import { DataGatewayService } from '../../services/data-gateway.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product!: Product;
  userId!: any;
  orderId!: string;
  order!: Order;
  productId!: any;
  addProductMessage: undefined | string;

  constructor(private productService: ProductService, private loginService:DataGatewayService, private router: Router, private route: ActivatedRoute, private orderService: OrderService){
    this.userId = loginService.userId;    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct(this.productId).subscribe((result) => {
      
      if(result) {
        this.product=result;
      }
    })
  }

  isAdmin():boolean {
    return this.loginService.userRole=='ADMIN';
  }

  /*Submit adds to order*/
  submit(){
    //console.log(p);
    this.orderService.updateOrder(this.order).subscribe((result) => {
      console.log(result);
      if(result){
        this.addProductMessage="Product added to cart";
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined;
      this.router.navigateByUrl('/cart');
    }, 2000);
  }
}
