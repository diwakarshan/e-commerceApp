import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) {
    // this.isAuthenticated = !!localStorage.getItem('token');
    // this.checkAuthentication();
   }
  // private getItems():HttpHeaders{
  //   const authToken = localStorage.getItem('token');
  //   return new HttpHeaders({
  //     'Content-Type':'Application/json',
  //     Authorization:`Bearer ${authToken}`
  //   });
  // }
  // private isAuthenticated = false;
  // onLogin(obj:any):Observable<any>{
  //   console.log(obj);
  //   return this.http.post('http://localhost:5000/api/user/login',obj)
  // }

  // loginNavigate(obj:any){
  //   this.onLogin(obj).subscribe((res:any)=>{
  //     localStorage.setItem('token',res.token);
  //     this.isAuthenticated=true;
  //     this.router.navigateByUrl('/products');
  //   })
  // }
  // isAuthenticatedUser():boolean{
  //   return this.isAuthenticated;
  // }
  // private checkAuthentication():void{
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     this.isAuthenticated=true;
  //   }else{
  //     this.isAuthenticated=false;
  //   }
  // }
  onRegister(obj:any){
    return this.http.post('http://localhost:5000/api/user/newuser',obj);
  }
}
