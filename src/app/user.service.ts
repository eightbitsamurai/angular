import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users'); 
  }

  login(user: User) {
    return this.http.post<User>('http://localhost:3000/login', user);
  }
}
