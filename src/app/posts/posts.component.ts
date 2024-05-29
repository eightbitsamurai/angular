import { Component, inject } from '@angular/core';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { PostColumnComponent } from "./post-column/post-column.component";
import { PostInfoComponent } from "./post-info/post-info.component";

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
