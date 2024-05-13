import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ReactiveFormComponent {
  loginForm!: FormGroup;
  validated: boolean;

  constructor() {
    this.loginForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }, {
      validators: this.passwordValidator()
    });
    this.validated = false;
  }

  submitForm() {
    this.validated = true;
    if (this.loginForm.valid) {
      console.log('form submitted');
    }
  }

  passwordValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value["password"];
      const repeatPassword = control.value["repeatPassword"];
      console.log(password, repeatPassword)
      if (password !== repeatPassword) {
        return { mismatch: true };
      } else {
        return null;
      }
    }
  }
}
