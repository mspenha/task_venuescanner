import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Users } from './../interfaces/user.model';


@Injectable()
export class UserService {

  users: Users[];

  constructor(private http: HttpClient) { }



}
