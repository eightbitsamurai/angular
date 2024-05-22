import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatchPasswordDirective } from './match-password.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatchPasswordDirective],
  providers: [UserService],
  templateUrl: './template-form.component.html'
})

export class TemplateFormComponent {
  userService = inject(UserService);
  loginForm = {
    firstName: '',
    username: '',
    password: '',
    repeatPassword: '',
    validated: false
  }
  
  submitForm(f: NgForm) {
    this.loginForm.validated = true;
    if (f.valid) {
      this.userService.login(f.value).subscribe();
    }
  }
}