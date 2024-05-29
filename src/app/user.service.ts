import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './common/user';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  private currentUser = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUser.asObservable();

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users'); 
  }

  getUser() {
    this.currentUser.next(JSON.parse(localStorage.getItem('user') || ''));
    return this.currentUser$;
  }

  login(user: User) {
    console.log("added user!!!", this.currentUser.value)
    return this.http.post<User>('http://localhost:3000/login', user).pipe(
      map((res: any) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout() {
    this.currentUser.next(null);
    return this.http.post('http://localhost:3000/logout', {});
  }
}
