import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  logout(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
    };

    this.http.get<any>('http://127.0.0.1:8000/api/auth/logout', httpOptions).subscribe(data => {
      localStorage.clear();
      this.router.navigate(['login']);
    });
  }
}
