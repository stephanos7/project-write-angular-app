import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class SessionService implements CanActivate {
  BASE_URL: string = 'http://localhost:3000';

  public user = {};
  public token = '';
  public isAuthenticated = false;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  canActivate(): Observable<boolean> | boolean {
    let token = localStorage.getItem('token');

    if (token) {
      let headers = new Headers({ 'Authorization': `JWT ${token}` });
      let options = new RequestOptions({ headers: headers });

      return this.http.get(`${this.BASE_URL}/dashboard`, options)
        .map((data) => {
          if (data) {
            this.isAuthenticated = true;
            this.token = token;
            return true;
          }
          return false;
        })
        .catch(this.handleError);
    }
    else {
      this.logout();
      this.router.navigate(['/login']);
      return false;
    }
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user)
      .map(res => {
        let json = res.json();
        let token = json.token;
        let user = json.user;

        if (token) {
          this.token = token;
          this.user = {
            id: user._id,
            email: user.email
          }
          this.isAuthenticated = true;
          localStorage.setItem('token', this.token);
        }
        
        return this.isAuthenticated;

      }).catch(this.handleError);
  }


  signup(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    this.token = '';
    this.user = {}
    this.isAuthenticated = false;
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
  
}