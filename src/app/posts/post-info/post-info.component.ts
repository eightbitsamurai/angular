import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-info',
  standalone: true,
  imports: [],
  templateUrl: './post-info.component.html',
})
export class PostInfoComponent {
  postsService = inject(PostsService);
  postCount = 0;

  ngOnInit() {
    this.postsService.postCount$.subscribe((value) => {
      this.postCount = value;
    });
  }
}
