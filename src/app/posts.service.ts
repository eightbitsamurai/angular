import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Post } from './common/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  http = inject(HttpClient);

  private postCount = new BehaviorSubject(0);
  private posts = new BehaviorSubject<Post[]>([]);
  private loading = new BehaviorSubject(false);

  public postCount$ = this.postCount.asObservable();
  public posts$ = this.posts.asObservable();
  public loading$ = this.loading.asObservable();

  constructor() {
    this.getPosts().subscribe(payload => {
      this.loading.next(false);
      this.postCount.next(payload.length);
      this.posts.next(payload);
    })
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts'); 
  }

  deletePost(id: number) {
    this.posts.next(this.posts.value.filter(p => p.id != id));
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }
}
