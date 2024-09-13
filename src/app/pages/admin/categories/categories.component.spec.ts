import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductService } from '../../../services/product/product.service';
import { CategoriesComponent } from './categories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { first, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let service:ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesComponent,HttpClientTestingModule ],
      providers:[ProductService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    service=TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialise observable and assign data',fakeAsync(()=>{
    const mockcategory={data:[{categoryId:1,categoryName:'vegetables'}]};
    spyOn(service,'getCategory').and.returnValue(of(mockcategory));
    fixture.detectChanges();
     component.categories$.subscribe(categories=>{
      expect(categories).toEqual(mockcategory.data);  
    })
   
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length+1).toBe(mockcategory.data.length);
    rows.forEach((row,index)=>{
      const categoryId=row.query(By.css('td:nth-child(1)')).nativeElement.textContent.trim();
      const categoryName=row.query(By.css('td:nth-child(2)')).nativeElement.textContent.trim();
      expect(categoryId).toBe(mockcategory.data[index].categoryId.toString());
      expect(categoryName).toBe(mockcategory.data[index].categoryName);
    })
    
  }))

});
