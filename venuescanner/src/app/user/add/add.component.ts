import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService]
})
export class AddComponent implements OnInit {

  users = {};
  errorMessage = '';
  successMessage = '';
  errorAlert = false;
  successAlert = false;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(users) {
    console.log(users);
    this.http.post<any>('http://127.0.0.1:8000/api/user/new', users).subscribe(data => {
      console.log(data);
      if (data.error === '23000') {
        this.errorAlert = true;
        this.errorMessage = 'This email is already being used';
      }else {
        this.users = {};
        this.successAlert = true;
        this.successMessage = 'User registered with success!';
      }
    });
  }

}
