import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-cusproducts',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cusproducts.component.html',
  styleUrl: './cusproducts.component.css'
})
export class CusproductsComponent implements OnInit {
  productList:any[]=[];
  categoryList:any[]=[];

constructor(private productsrc:ProductService,private router:Router,private shared:SharedService){}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts(){
    this.productsrc.getProducts().subscribe((res:any)=>{
      this.productList=res.data;
    })
  }
  getAllCategory(){
    this.productsrc.getCategory().subscribe((res:any)=>{
      this.categoryList=res.data;
    })
  }
  navCategory(id:any){
    this.router.navigate(['products',id])
  }
  addToCart(obj:any){
    this.shared.addToCart(obj);
  }

}
