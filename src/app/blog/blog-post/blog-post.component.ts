import { CommonModule } from '@angular/common';
import { Component, Input, SkipSelf } from '@angular/core';
import { Post } from '../../types/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  @Input() blogPost!: Post;

  constructor(@SkipSelf() private blogService: BlogService) {
  }

  editPost() {
    this.blogService.toggleModal(true);
    this.blogService.setCurrentPost(this.blogPost);
  }

  deletePost() {
    this.blogService.deleteBlogPost(this.blogPost.id);
  }
}
