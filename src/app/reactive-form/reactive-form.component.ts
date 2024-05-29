import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../common/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [UserService]
})
export class ReactiveFormComponent {
  userService = inject(UserService);
  router = inject(Router);
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
      this.userService.login(this.loginForm.value).subscribe(() => {
        localStorage.setItem('user', JSON.stringify(this.loginForm.value));
        this.router.navigateByUrl('/');
      });
    }
  }

  passwordValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value["password"];
      const repeatPassword = control.value["repeatPassword"];
      if (password !== repeatPassword) {
        return { mismatch: true };
      } else {
        return null;
      }
    }
  }
}
