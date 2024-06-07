import { CommonModule } from '@angular/common';
import { Component, SkipSelf } from '@angular/core';
import { Post } from '../types/post';
import { BlogService } from '../services/blog.service';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [CommonModule, BlogPostComponent, BlogFormComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPosts: Post[] = [];

  constructor(@SkipSelf() private blogService: BlogService) {
    this.blogService.posts$.subscribe(value => this.blogPosts = value);
  }

  addNewPost() {
    this.blogService.setCurrentPost(null);
    this.blogService.toggleModal(true);
  }
}
