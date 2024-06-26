import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostColumnComponent } from "./post-column/post-column.component";
import { PostInfoComponent } from "./post-info/post-info.component";
import { PostsService } from '../services/posts.service';

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    imports: [CommonModule, PostColumnComponent, PostInfoComponent]
})
export class PostsComponent {
  postsService = inject(PostsService);
  loading = true;

  ngOnInit() {
    this.postsService.loading$.subscribe((value) => {
      this.loading = value;
    });
  }
}
