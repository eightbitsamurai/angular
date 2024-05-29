import { CommonModule } from '@angular/common';
import { Component, SkipSelf } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatchPasswordDirective } from './match-password.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatchPasswordDirective],
  templateUrl: './template-form.component.html'
})

export class TemplateFormComponent {
  constructor(@SkipSelf() private userService: UserService) {}

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