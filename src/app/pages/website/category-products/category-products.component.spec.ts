import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryProductsComponent } from './category-products.component';
import { ProductService } from '../../../services/product/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryProductsComponent', () => {
  let component: CategoryProductsComponent;
  let fixture: ComponentFixture<CategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProductsComponent,RouterTestingModule,HttpClientTestingModule],
      providers:[ProductService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
