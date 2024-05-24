import { Component, Input } from '@angular/core';
import { Post } from '../../common/post';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../post/post.component";

@Component({
    selector: 'post-column',
    standalone: true,
    templateUrl: './post-column.component.html',
    imports: [CommonModule, PostComponent]
})
export class PostColumnComponent {
  @Input() columnTitle = "";
  @Input() posts: Post[] = [];
}
