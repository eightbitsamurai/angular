import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './common/user';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Credentials } from './common/credentials';
import e from 'cors';

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
    return this.http.get<User[]>('http://localhost:3000/allUsers'); 
  }

  register(user: User) {
    return this.http.post<User>('http://localhost:3000/register', user).pipe(
      map(() => {
        this.router.navigateByUrl('/');
      })
    );
  }

  login(credentials: Credentials) {
    return this.http.post<User>('http://localhost:3000/login', credentials).pipe(
      map((res: User) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.currentUser.next(res);
        this.router.navigateByUrl('/posts');
      })
    );
  }

  logout() {
    return this.http.post('http://localhost:3000/logout', {}).pipe(
      map(() => {
        localStorage.removeItem('user');
        this.currentUser.next(null);
        this.router.navigateByUrl('/');
      })
    );
  }
}
