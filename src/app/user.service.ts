import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './common/user';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  router = inject(Router);
  private currentUser = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUser.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    user && this.currentUser.next(JSON.parse(user));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users'); 
  }

  login(user: User) {
    this.currentUser.next(user);
    return this.http.post<User>('http://localhost:3000/login', user).pipe(
      map(() => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/posts');
      })
    );
  }

  logout() {
    this.currentUser.next(null);
    return this.http.post('http://localhost:3000/logout', {}).pipe(
      map(() => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/');
      })
    );;
  }
}
