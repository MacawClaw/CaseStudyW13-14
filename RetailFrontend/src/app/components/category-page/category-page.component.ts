import { Component } from '@angular/core';
import { User } from 'src/app/services/User';
import { Order } from 'src/app/services/Order';
import { Product } from 'src/app/services/Product';
import { DataGatewayService } from 'src/app/services/data-gateway.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {
  productList!: Product[];
  productMessage: undefined | string;
  /*iconDelete=faTrash;
  iconEdit=faEdit;*/
  userId: undefined|number;

  constructor(private productService: ProductService, private loginService:DataGatewayService){
    this.userId = loginService.userId;    
  }

  ngOnInit(): void {
    this.list();
  }

  /*
  deleteProduct(productId:number){
    this.productService.deleteProduct(productId).subscribe((result) => {
      if(result){
        this.productMessage="Product Deleted";
        this.list();
      }
      console.warn(result);
      
    });
    setTimeout(() => {
      this.productMessage=undefined;
    }, 2000);
  }
  */

  list() {
    this.productService.productList().subscribe((result) => {
      
      if(result) {
        this.productList=result;
      }
    })
  }

  isAdmin():boolean {
    return this.loginService.userRole=='ADMIN';
  }

}
