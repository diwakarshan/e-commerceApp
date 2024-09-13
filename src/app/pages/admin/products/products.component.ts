import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  users:any[]=[];
constructor(private productsrc:ProductService){}

categoryList:any=[];
productList:any=[];
errormsg:any;
successmsg:any;

  ngOnInit(): void {
   this.getAllCategory();
   this.getAllProducts();
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
   onEdit(item:any){
    this.productObj=item;
    this.openSidePanel();
  }
    onSave(){
    this.productsrc.createProduct(this.productObj).subscribe((res:any)=>{
        this.successmsg='Data inserted successfully';
      //this.clearSuccessMessage();
        this.getAllProducts();  
    })
  } 
  onUpdate(){
    this.productsrc.updateProduct(this.productObj,this.productObj.id).subscribe((res:any)=>{
        this.successmsg=res.message;
       // this.clearSuccessMessage();
        this.getAllProducts();
    })
  }
  onDelete(item:any){
    this.productObj=item;
    this.productsrc.deleteVegetable(this.productObj.id).subscribe((res:any)=>{
      this.successmsg='Data deleted successfully';
    //  this.clearSuccessMessage();
    })
    this.getAllProducts();
  }

isBooleanVisible:Boolean=false;
productObj:any={
    "id": null,
    "name": "",
    "shortName": "",
    "price": null,
    "description": "",
    "timeSpan": "",
    "category": "",
    "categoryName":"",
    "imageUrl": "",
}
resetForm(){
  this.productObj = {
    id: null,
    name: "",
    shortName: "",
    price: null,
    description: "",
    timeSpan: "",
    category: "",
    categoryName: "",
    imageUrl: "",
  };
}
openSidePanel(){
  this.isBooleanVisible=true;
}
closeSidePanel(){
  this.isBooleanVisible=false;
}

}
