import { CommonModule } from '@angular/common';
import { Component, SkipSelf } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'blog-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './blog-form.component.html'
})
export class BlogFormComponent {
  isModalOpen = false;
  postForm!: FormGroup;
  createMode = true;
  username = "";

  constructor(@SkipSelf() private blogService: BlogService, @SkipSelf() private userService: UserService) {
    this.blogService.isModalOpen$.subscribe(value => this.isModalOpen = value);
    this.userService.currentUser$.subscribe(value => this.username = value?.username ?? "");

    this.blogService.currentPost$.subscribe(post => {
      this.postForm = new FormGroup({
        id: new FormControl(post?.id ?? 0, Validators.required),
        username: new FormControl(post?.username ?? this.username, Validators.required),
        title: new FormControl(post?.title ?? "", Validators.required),
        body: new FormControl(post?.body ?? "", Validators.required)
      })
      this.createMode = !post;
    })
  }

  savePost() {
    if (this.createMode) {
      this.blogService.addBlogPost(this.postForm.value);
    } else {
      this.blogService.editBlogPost(this.postForm.value);
    }
  }

  closeModal() {
    this.blogService.toggleModal(false);
  }
}
