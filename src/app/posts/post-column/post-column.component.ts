import { Component, Input, inject } from '@angular/core';
import { Post } from '../../common/post';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../post/post.component";
import { PostsService } from '../../posts.service';

@Component({
    selector: 'post-column',
    standalone: true,
    templateUrl: './post-column.component.html',
    imports: [CommonModule, PostComponent]
})
export class PostColumnComponent {
  @Input() columnTitle = "";
  @Input() showOddPosts = false;
  posts: Post[] = [];
  postsService = inject(PostsService);

  ngOnInit() {
    this.postsService.posts$.subscribe((value) => {
      this.posts = value.filter(post => this.showOddPosts ? post.id % 2 !== 0 : post.id % 2 === 0)
    });
  }
}
