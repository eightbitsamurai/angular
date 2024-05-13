import { CommonModule } from '@angular/common';
import { Component, Directive } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatchPasswordDirective } from './match-password.directive';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatchPasswordDirective],
  templateUrl: './template-form.component.html'
})

export class TemplateFormComponent {
  loginForm = {
    firstName: '',
    username: '',
    password: '',
    repeatPassword: '',
    validated: false
  }
  

  submitForm() {
    this.loginForm.validated = true;
    
      //console.log(this.firstName, this.username, this.password, this.repeatPassword);
  }
  
}

