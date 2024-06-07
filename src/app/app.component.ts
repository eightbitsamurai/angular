import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  providers: [UserService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router, userService: UserService, blogService: BlogService) {
  }
  title = 'form-app';
}
