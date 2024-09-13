import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constants/constant';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_CATEGORY);
  }
  getProducts(){
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_ALL_PRODUCTS);
  }
  createProduct(obj:any){
  return this.http.post(Constant.API_END_POINT+Constant.METHODS.GET_CREATE_PRODUCT,obj);
  }
  updateProduct(obj:any,id:any){
    let ids=id;
    return this.http.put(Constant.API_END_POINT+Constant.METHODS.GET_UPDATE_PRODUCT+ids,obj);
  }
  deleteVegetable(id:any){
    let ids=id;
    return this.http.delete(Constant.API_END_POINT+Constant.METHODS.GET_DELETE_DATA+ids);
  }
  productByCategory(id:any){
    let ids=id;
    return this.http.get(Constant.API_END_POINT+Constant.METHODS.GET_PRODUCTBY_CATEGORY+ids);
  }
  createUser(obj:any){
    return this.http.post(Constant.API_END_POINT+Constant.METHODS.GET_CREATE_NEWUSER,obj);
  }
  
}
