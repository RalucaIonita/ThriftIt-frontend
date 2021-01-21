import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './products/nav-bar/nav-bar/nav-bar.component';



@NgModule({
  declarations: [ProductsComponent, CartComponent, NavBarComponent],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
