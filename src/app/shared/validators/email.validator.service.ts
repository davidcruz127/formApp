import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{
  constructor() { }

  validate(control: AbstractControl<any, any>):  Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({email});

    const httpCallObservale = new Observable<ValidationErrors | null >( (subcriber) => {
      console.log({email});

      if (email === 'davidcruz127@gmail.com'){
        subcriber.next({ emailTaken: true});
        subcriber.complete();
      }

      subcriber.next(null);
      subcriber.complete();

    });

    return httpCallObservale;
  }



  /*
  validate(control: AbstractControl<any, any>):  Observable<ValidationErrors | null> {

    const email = control.value;
    console.log({email});

    return of ({
      emailTaken: true
    })
  }*/


}
