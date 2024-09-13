import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { NewUserComponent } from '../new-user/new-user.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginObj:any={
      username:'',
      password:''
    }

    constructor(private router:Router){}

    onLogin(){
      if(this.loginObj.username=='admin' && this.loginObj.password=="12345"){
        this.router.navigateByUrl('/products');
      }
      else{
       this.router.navigateByUrl('/shop')
      }
    }
    newUser(){
      this.router.navigateByUrl('/newuser');
    }

}
