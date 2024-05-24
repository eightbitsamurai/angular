import { Component, Input } from '@angular/core';
import { Post } from '../../common/post';

@Component({
  selector: 'post-component',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
})
export class PostComponent {
  @Input() post: Post | undefined;
}