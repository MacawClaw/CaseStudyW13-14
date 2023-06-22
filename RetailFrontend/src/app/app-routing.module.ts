import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}/*,
  {path: 'department/:department', component: CategoryPageComponent},
  {path: 'products/:id', component: ProductPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'orders', component: OrdersPageComponent},
  {path: 'orders/:id', component: OrderComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
