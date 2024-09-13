import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
productList:any[]=[];
activeCategoryId:number=0;
  
constructor(private productsrc:ProductService,private activatedRoute:ActivatedRoute,private shared:SharedService){
  this.activatedRoute.params.subscribe((res:any)=>{
    this.activeCategoryId=res.id;
    this.productByCat();
  })
}

productByCat(){
  this.productsrc.productByCategory(this.activeCategoryId).subscribe((res:any)=>{
    this.productList=res.data;
  })
}
addToCart(obj:any){
  this.shared.addToCart(obj);
}
}
