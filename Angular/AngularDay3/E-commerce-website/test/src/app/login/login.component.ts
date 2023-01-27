import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router){}
  onsubmit(loginforrm:any){
console.log(loginforrm);
  }
    redirecttohome(){
    this.router.navigate([""])
  
   }
   redirecttoregister(){
    this.router.navigate(["register"])
  
   }
}
