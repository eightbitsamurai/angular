import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[appMatchPassword]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }],
    standalone: true
  })
  export class MatchPasswordDirective implements Validator {
    @Input('appMatchPassword') matchPassword: string[] = [];
  
    validate(formGroup: FormGroup): ValidationErrors | null {
      return Validation.match(this.matchPassword[0], this.matchPassword[1])(formGroup);
    }
  }

export default class Validation {
static match(controlName: string, checkControlName: string) {
    return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const checkControl = formGroup.controls[checkControlName];

    if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
    }

    if (control?.value !== checkControl?.value) {
        checkControl?.setErrors({ matching: true });
        return { matching: true };
    } else {
        checkControl?.setErrors(null);
        return null;
    }
    };
}
}