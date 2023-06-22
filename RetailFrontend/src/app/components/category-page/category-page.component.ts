import { Component } from '@angular/core';
import { User } from '../../services/User';
import { Order } from '../../services/Order';
import { Product } from '../../services/Product';
import { DataGatewayService } from '../../services/data-gateway.service';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  department!: any;

  constructor(private productService: ProductService, private loginService:DataGatewayService, private router: Router, private route: ActivatedRoute){
    this.userId = loginService.userId;    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.department = params.get('department');
    });
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

  navigateToProduct(productName: string) {
    this.router.navigate(['/product', productName]);
  }

}
