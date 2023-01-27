import { Component } from '@angular/core';
import{FormControl,FormGroup ,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

prodctform:FormGroup;
valid :any=""
constructor(){
 this.prodctform =new FormGroup({
  Name :new FormControl('',[Validators.required ,Validators.minLength(3)]),
email:new FormControl('',[Validators.required ,Validators.email ,Validators.pattern(/^[a-z]{2,}[0-9]*@(gmail|yahoo)(.com|.eg|.edu)$/)]),
password:new FormControl('',[Validators.required ,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
)]),
confirmpassword:new FormControl('',[Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)])

 })

}
prodcregisterform(){
console.log(this.prodctform)
}

checkpassword():any{
  if(  this.prodctform.controls["password"].value!=this.prodctform.controls["confirmpassword"].value)
  {
    this.valid= "password isn't match"
  }
  else{
    this.valid="true matching"
  }
}

}
