import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};
  erroCredentials = false;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(user) {
    this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user).subscribe(

      (data) => {
        if (data.user) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          this.route.navigate(['user/list']);
        }
      },

      (errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 401) {
          this.erroCredentials = true;
        }
      }

    );
  }

}
