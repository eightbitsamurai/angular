import { Component, Input, inject } from '@angular/core';
import { Post } from '../../types/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-component',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post!: Post;
  postsService = inject(PostsService);

  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe();
  }
}