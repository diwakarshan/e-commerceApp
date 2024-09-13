import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  productList:any[]=[];
  categoryList:any[]=[];

constructor(private productsrc:ProductService,private router:Router,private shared:SharedService){}

  ngOnInit(): void {
    this.getAllCategory();
    this.getItems();
  }
  items:any[]=[];

  getAllCategory(){
    this.productsrc.getCategory().subscribe((res:any)=>{
      this.categoryList=res.data;
    })
  }
  navCategory(id:any){
    this.router.navigate(['products',id])
  }
  getItems(){
    this.shared.items$.subscribe((items:any[])=>{
      this.items=items;
    });
  }
  getTotal(){
    return this.items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  }
  removeItem(id:number){
    this.shared.removeItem(id);
    this.getItems();
  }
}
