import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Users } from './../../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService]
})
export class ListComponent implements OnInit {

  users: Users[];

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/user/list').subscribe(data => {
      this.users = data;
    });
  }

}

