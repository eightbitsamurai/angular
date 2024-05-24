import { Component, inject } from '@angular/core';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { PostColumnComponent } from "./post-column/post-column.component";
import { Post } from '../common/post';
import { PostInfoComponent } from "./post-info/post-info.component";

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    imports: [CommonModule, PostColumnComponent, PostInfoComponent]
})
export class PostsComponent {
  postsService = inject(PostsService);
  postCount = 0;
  oddPosts: Post[] = [];
  evenPosts: Post[] = [];
  loading = true;

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.loading = false;
      posts.map(post => post.id % 2 === 0 ? this.evenPosts.push(post) : this.oddPosts.push(post));
      this.postCount = posts.length;
    })
  }

}
