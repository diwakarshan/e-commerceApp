import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  constructor(private router:Router,private service:ProductService,private userservice:UserService){}
  userValues:any={
    "user_name":"",
    "email":"",
   "mobile":"",
    "password":""
  }
onLogin(){
  // this.service.createUser(this.userValues).subscribe((res:any)=>{
  //   alert('User created');
  // })
  this.userservice.onRegister(this.userValues).subscribe((res:any)=>{
    alert('user created')
})

  this.router.navigateByUrl('/login');
}
regUser(){
this.router.navigateByUrl('/login');
}
}
