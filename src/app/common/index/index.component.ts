import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../types/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'index',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService],
  templateUrl: './index.component.html',
})
export class IndexComponent {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => this.users = data);
  }
}