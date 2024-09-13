import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories$:Observable<any>;
constructor(private productsrc:ProductService){
  this.categories$=this.productsrc.getCategory().pipe(
    map((item:any)=>{
      return item.data;
    })
  )
}

}
