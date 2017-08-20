import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';


@Injectable()
export class StoriesService {
  BASE_URL: string = 'http://localhost:3000';
  
  constructor(
    private http: Http,
    private session: SessionService
  ) {}

  // 0. HANDLE ERRORS
  handleError(e) {
    return Observable.throw(e.json().message);
  }

  // 1. GET ALL STORIES
  getStories() {
    return this.http.get(`${this.BASE_URL}/api/stories`, this.requestOptions())
      .map((res) => res.json());
  }

  // 2. GET ONE STORY
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/stories/${id}`, this.requestOptions())
      .map((res) => res.json());
  }

  // 3. CREATE A NEW STORY
  postNew(story){
    return this.http.post(`${this.BASE_URL}/api/stories`,story, this.requestOptions())
      .map((res) => res.json());
  }

  // 4. REMOVE A STORY
  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/story/${id}`, this.requestOptions())
      .map((res) => res.json());
  }

  // 4. GET ALL STORIES BY ONE AUTHOR
  getStoriesByAuthor(id){
    return this.http.get(`${this.BASE_URL}/api/stories/author/${id}`, this.requestOptions())
      .map((res) => res.json());
  }
  
  // authenticate each request with a token
  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }
}