import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private http:HttpClient,
    ) { 
      
    }
  apiUrl = "https://localhost:44393/api/products/";
  getAllProductsUrl = this.apiUrl + "all";

  GetAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getAllProductsUrl);
  }

  
}
