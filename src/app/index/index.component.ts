import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../common/user';

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