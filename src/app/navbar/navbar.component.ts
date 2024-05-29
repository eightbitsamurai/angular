import { Component, SkipSelf} from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../common/user';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  user: User | null = null;

  constructor(@SkipSelf() private userService: UserService) {
    this.userService.currentUser$.subscribe(value => {
      this.user = value;
    });
  }

  handleLogout() {
    this.userService.logout().subscribe();
  }
}
