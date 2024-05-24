import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-info',
  standalone: true,
  imports: [],
  templateUrl: './post-info.component.html',
})
export class PostInfoComponent {
 @Input() postCount = 0;
}
