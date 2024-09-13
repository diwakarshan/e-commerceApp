import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CusproductsComponent } from './cusproducts.component';
import { ProductService } from '../../../services/product/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CusproductsComponent', () => {
  let component: CusproductsComponent;
  let fixture: ComponentFixture<CusproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusproductsComponent, RouterTestingModule,HttpClientTestingModule ],
      providers:[ProductService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
