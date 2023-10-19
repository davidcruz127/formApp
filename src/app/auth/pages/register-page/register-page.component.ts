import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email.validator.service';


@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorServices.firstNameAndLastnamePattern) ]],
    //email: ['', [Validators.required, Validators.pattern(this.validatorServices.emailPattern)], [ new EmailValidator()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorServices.emailPattern)], [ this.emailValidator]],
    username: ['', [Validators.required, Validators.pattern(this.validatorServices.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [
      this.validatorServices.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  constructor( private fb: FormBuilder,
               private validatorServices: ValidatorsService,
               private emailValidator: EmailValidator )
  {}

  isValidField(field: string){
    return this.validatorServices.isValidField(this.myForm, field);
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }


}
