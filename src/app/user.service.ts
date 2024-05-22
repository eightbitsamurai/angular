import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getUsers() {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: "json"
      }
    });
    
    return this.http.get('http://localhost:3000/users', options); 
  }

  login(user: User) {
    let options = this.getStandardOptions();
    return this.http.post('http://localhost:3000/login', user, options);
  }
}
