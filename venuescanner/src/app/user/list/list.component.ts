import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
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

  users = [];
  removeIndex: number;

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:8000/api/user/list').subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(u) {
    if (confirm('Are you sure to delete ' + u.firstname + ' ' + u.surname + ' ?')) {
      this.http.get('http://127.0.0.1:8000/api/user/' + u.id + '/delete').subscribe(data => {
        this.removeIndex = this.users.map(function(item) { return item.id; }).indexOf(u.id);

        // remove object
        this.users.splice(this.removeIndex, 1);
      });
    }
  }

}

