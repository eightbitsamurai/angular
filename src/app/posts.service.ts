import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  http = inject(HttpClient);

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'); 
  }
}
