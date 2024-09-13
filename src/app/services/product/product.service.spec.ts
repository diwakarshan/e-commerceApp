import { TestBed } from '@angular/core/testing';
import { Constant } from '../Constants/constant';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { response } from 'express';

describe('ProductService', () => {
  let service: ProductService;
  let httpmock:HttpTestingController;
  const apiEndPoint = Constant.API_END_POINT;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
    httpmock=TestBed.inject(HttpTestingController);
  });
  afterEach(()=>{
    httpmock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getCategory',()=>{
    it('should return category',()=>{
      const mockcategory=[{categoryId:1,categoryName:'vegetables'}];
      service.getCategory().subscribe(categories=>{
        expect(categories).toEqual(mockcategory);
      });
      const req=httpmock.expectOne(apiEndPoint+Constant.METHODS.GET_ALL_CATEGORY);
      expect(req.request.method).toBe('GET');
      req.flush(mockcategory);
    })
  })
  describe('get products',()=>{
    it('should return all products',()=>{
      const mockproduct=[{id:1,name:'test'}]
      service.getProducts().subscribe(products=>{
        expect(products).toEqual(mockproduct);
      })
      const req=httpmock.expectOne(apiEndPoint+Constant.METHODS.GET_ALL_PRODUCTS);
      expect(req.request.method).toBe('GET');
      req.flush(mockproduct);
    })
  })
  describe('create product',()=>{
    it('should create a product',()=>{
      const mockproduct=[{id:1,name:'test'}];
      service.createProduct(mockproduct).subscribe(product=>{
        expect(product).toEqual(mockproduct);
      })
      const req = httpmock.expectOne(apiEndPoint+Constant.METHODS.GET_CREATE_PRODUCT);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockproduct);
      req.flush(mockproduct);
    })
  })
  describe('delete product',()=>{
    it('should delete product',()=>{
      const id=1;
      
      service.deleteVegetable(id).subscribe(product=>{
        expect(product).toBeNull;
      })
      const req = httpmock.expectOne(`${apiEndPoint+Constant.METHODS.GET_DELETE_DATA}${id}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    })
  })
  describe('update product',()=>{
    it('should update product',()=>{
      const mockproduct=[{id:1,name:'test'}];
      const id = 1;
      service.updateProduct(mockproduct,id).subscribe(product=>{
        expect(product).toBe(mockproduct);
      })
      const req = httpmock.expectOne(`${apiEndPoint+Constant.METHODS.GET_UPDATE_PRODUCT}${id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(mockproduct);
    })
  })
  describe('product by category',()=>{
    it('should get product by category',()=>{
      const mockproduct=[{id:1,name:'test'}];
      const id = 1;
      service.productByCategory(id).subscribe(product=>{
        expect(product).toBe(mockproduct);
      })
      const req = httpmock.expectOne(`${apiEndPoint+Constant.METHODS.GET_PRODUCTBY_CATEGORY}${id}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockproduct);
    })
  })
});
