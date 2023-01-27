// import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  reactivform:FormGroup
  constructor(private fb:FormBuilder){
    this.reactivform=this.fb.group({
      email:["",[Validators.required ,Validators.minLength(3)]],
      username:["",[Validators.required ,  Validators.pattern(/^\S*$/),Validators.minLength(3)]],
      password:["",[Validators.required ,  Validators.pattern(/[a-z]{1,}[A-Z]{1,}\d{1,}[!\@\#\$\%\^\&\*\)\(+\=\._-]{1,}\S*$/),Validators.minLength(8)]],
      confirmpassword:["",[Validators.required ,  Validators.pattern(/[a-z]{1,}[A-Z]{1,}\d{1,}[!\@\#\$\%\^\&\*\)\(+\=\._-]{1,}\S*$/),Validators.minLength(8)]],
    },{
      validators:this.customValidator('password','confirmpassword')
    }
  
    // [CustomValidators.MatchValidator('password', 'confirmPassword')]
    )
  }
private customValidator(sourcePassword: string, targetPassword: string):ValidatorFn{
  return (control:AbstractControl): ValidationErrors | any =>{
   const formGroup= control as FormGroup
    const sourceCtrl = formGroup.get(sourcePassword)?.value;
    const targetCtrl = formGroup.get(targetPassword)?.value;
    if(sourceCtrl==targetCtrl){
      return null
    }
    else{
      return {valuesDontMatches:true}
    }
  }
}
get formControls(){
 
  return this.reactivform.controls

}

  submitFunc(){
    console.log(
     this.reactivform.controls['username']
    );
    
    // get registerFormControle{
    //   return 
    // }
  }
  
}


/*

export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}


*/