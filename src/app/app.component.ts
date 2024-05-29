import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  providers: [UserService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router, userService: UserService) {
  }
  title = 'form-app';
}
