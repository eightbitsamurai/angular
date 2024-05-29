import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../common/user';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  router = inject(Router);
  userService = inject(UserService);
  user: User | null = null;

  constructor() {
    this.userService.getUser().subscribe(value => {
      this.user = value
      console.log("user value",this.user, value)
    });
  }

  

  handleLogout() {
    this.userService.logout().subscribe();
  }
}
