import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../../../services/product/product.service';
import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent,HttpClientTestingModule],
      providers:[ProductService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create products API test',()=>{
    spyOn(service,"createProduct").and.returnValue(of(
     'Data inserted successfully.'
    ));
    component.onSave();
    expect(component.successmsg).toBe(
      'Data inserted successfully'
    );
  });

  it('get all products API test',()=>{
    const mockResponse = { data: 'all user data' };
    spyOn(service,"getProducts").and.returnValue(of(
      mockResponse
    ));
    component.getAllProducts();
    expect(component.productList).toEqual(
      mockResponse.data
    )
  })
  it('delete products',()=>{
    const mockResponse = {data:'Data deleted successfully'};
    spyOn(service,"deleteVegetable").and.returnValue(of(
      mockResponse
    ));
    const mockid={id:123};
    component.onDelete(mockid);
    expect(component.successmsg).toEqual(
      mockResponse.data
    )
  })
  it('call methods in ngOnInit',()=>{
    spyOn(component,'getAllProducts').and.callThrough();
    spyOn(component,'getAllCategory').and.callThrough();
    component.ngOnInit();
    expect(component.getAllCategory).toHaveBeenCalled();
    expect(component.getAllProducts).toHaveBeenCalled();
  })
  it('should fetch products and update product list',()=>{
    const mockproduct={data:[{id:1,name:'product1',shortname:'product1',category:'vegetables',price:'100',timespan:'1-2 days',imageUrl:'xyz.jpg',description:'test'}]};
    spyOn(service,'getProducts').and.returnValue(of(mockproduct));
    component.getAllProducts();
    expect(component.productList).toEqual(mockproduct.data);
  })
  it('should fetch category and update category list',()=>{
    const mockproduct={data:[{categoryId:1,categoryName:'vegetables'}]};
    spyOn(service,'getCategory').and.returnValue(of(mockproduct));
    component.getAllCategory();
    expect(component.categoryList).toEqual(mockproduct.data);
  })
  it('should save new product and update the product list',()=>{
    const newProduct={id:1,name:'product1'};
    component.productObj=newProduct;
    spyOn(service,'createProduct').and.returnValue(of({message:'Data inserted successfully'}));
    spyOn(component,'getAllProducts').and.callThrough();
    component.onSave();
    expect(service.createProduct).toHaveBeenCalledWith(newProduct);
    expect(component.successmsg).toBe('Data inserted successfully');
    expect(component.getAllProducts).toHaveBeenCalled();
  })
  it('should update the existing product',()=>{
    const existingProduct={id:1,name:'product1'};
    component.productObj=existingProduct;
    spyOn(service,'updateProduct').and.returnValue(of({message:'Data updated successfully'}));
    spyOn(component,'getAllProducts').and.callThrough();
    component.onUpdate();
    expect(service.updateProduct).toHaveBeenCalledWith(existingProduct,existingProduct.id);;
    expect(component.successmsg).toBe('Data updated successfully');
    expect(component.getAllProducts).toHaveBeenCalled();
  })
  it('delete product and update existing list',()=>{
    const deleteId={id:1};
    component.productObj=deleteId;
    spyOn(service,'deleteVegetable').and.returnValue(of({message:'Data deleted successfully'}));
    spyOn(component,'getAllProducts').and.callThrough();
    component.onDelete(deleteId);
    expect(service.deleteVegetable).toHaveBeenCalledWith(deleteId.id);
    expect(component.successmsg).toBe('Data deleted successfully');
    expect(component.getAllProducts).toHaveBeenCalled();
  })
  it('should toggle side panel', () => {
    component.openSidePanel();
    expect(component.isBooleanVisible).toBeTrue();
    component.closeSidePanel();
    expect(component.isBooleanVisible).toBeFalse();
  });
  it('test case for if statements',()=>{
    component.errormsg='All feilds are required';
    fixture.detectChanges();
    const alert = fixture.nativeElement.querySelector('#errormsg');
    expect(alert).toBeTruthy();
    expect(alert.textContent).toContain('All feilds are required');
  })
  it('testcase for if statement',()=>{
    component.successmsg='Data inserted successfully';
    fixture.detectChanges();
    const alert = fixture.nativeElement.querySelector('#successmsg');
    expect(alert).toBeTruthy();
    expect(alert.textContent).toContain('Data inserted successfully');;
  })
  it('side panel test',()=>{
    component.isBooleanVisible=true;
    fixture.detectChanges();
    
    const panel = fixture.nativeElement.querySelector('#sidepanel');
    expect(panel).toBeTruthy();
    expect(panel.classList.contains('col-8')).toBe(true);
  })
  it('check boolean statements',()=>{
    component.openSidePanel();
    expect(component.isBooleanVisible).toBeTrue();
  })
  it('check boolean statements',()=>{
    component.closeSidePanel();
    expect(component.isBooleanVisible).toBeFalse();
  })

});
