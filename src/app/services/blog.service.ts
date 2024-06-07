import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  http = inject(HttpClient);

  private blogPosts = new BehaviorSubject<Post[]>([]);
  private isModalOpen = new BehaviorSubject(false);
  private currentPost = new BehaviorSubject<Post | null>(null);

  public posts$ = this.blogPosts.asObservable();
  public isModalOpen$ = this.isModalOpen.asObservable();
  public currentPost$ = this.currentPost.asObservable();

  constructor() {
    this.getBlogPosts().subscribe(payload => this.blogPosts.next(payload))
  }

  toggleModal(modalState: boolean) {
    this.isModalOpen.next(modalState);
  }

  setCurrentPost(post: Post | null) {
    this.currentPost.next(post);
  }

  getBlogPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/blog-posts/'); 
  }

  addBlogPost(post: Post) {
    return this.http.post('http://localhost:3000/blog-posts/new', post)
      .subscribe(() => {
        this.getBlogPosts().subscribe(payload => {
          this.blogPosts.next(payload);
          this.isModalOpen.next(false);
        })
      }); 
  }

  editBlogPost(post: Post) {
    return this.http.put(`http://localhost:3000/blog-posts/${post.id}`, post)
      .subscribe(() => {
        this.getBlogPosts().subscribe(payload => {
          this.blogPosts.next(payload);
          this.isModalOpen.next(false);
        })
      }); 
  }

  deleteBlogPost(id: number) {
    return this.http.delete(`http://localhost:3000/blog-posts/${id}`)
      .subscribe(() => {
        this.getBlogPosts().subscribe(payload => {
          this.blogPosts.next(payload);
        })
      }); 
  }
}
