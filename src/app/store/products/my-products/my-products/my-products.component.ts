import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/models/addProduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  selectedFile: File = null;

  product = new AddProduct();

  constructor(private productService : ProductsService) { }

  availableForm: boolean;

  ngOnInit(): void {
    this.availableForm = false;
    console.log("init")
  }


  ShowForm() {
    this.availableForm = true;
  }

  CloseForm() {
    this.availableForm = false;
  }

  OnFileSelected(files: FileList) {
    console.log("Some shit is happening");
    this.selectedFile = files.item(0);
    var fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedFile);
    fileReader.onload = () => {
      console.log(this.selectedFile);
    }
    var sendingFile =  fileReader.result;
    

  }

  AddProduct(product : AddProduct) {
    this.productService.AddProduct(product).subscribe((response : any) => {
      console.log("Product added.");}, (error:any) => {
      alert(error.error);
    })
  }


}
