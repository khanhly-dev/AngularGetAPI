import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../productViewModel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productList : Product[] = [];

  ngOnInit(): void {
    this.GetAllProduct();
  }

  GetAllProduct():void
  {
    // this.productService.GetAllProduct()
    // .subscribe(product => this.productList === product)
    this.productService.GetAllProduct().subscribe(p => this.productList = p)

  }
}
