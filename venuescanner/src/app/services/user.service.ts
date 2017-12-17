import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http
      .get('http://127.0.0.1:8000/api/user/list')
      .map(response => response.json());
  }

}
