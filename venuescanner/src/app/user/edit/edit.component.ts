import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  user = [];
  errorMessage = '';
  errorAlert = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => { this.id = params['id']; } );
    this.http.get<any>('http://127.0.0.1:8000/api/user/' + this.id + '/get').subscribe(data => {
      this.user = data;
    });
  }

  onSubmit(user) {
    this.http.put<any>('http://127.0.0.1:8000/api/user/edit', user).subscribe(data => {
      console.log(data);
      if (data.error === '23000') {
        this.errorAlert = true;
        this.errorMessage = 'This email is already being used';
      }
    });
  }

}
