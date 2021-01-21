import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import {ProductsComponent} from './../../products.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router,
    private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  GoHome(): void{
    this.router.navigateByUrl('products');
  }
  
  GetAllProducts(): Observable<Product[]> {
    return this.productsService.GetAllProducts();
  }
}
