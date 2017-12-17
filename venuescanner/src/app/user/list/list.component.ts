import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService]
})
export class ListComponent implements OnInit {

  users: Users[];

  constructor(private usersService: UserService) {
    this.usersService.getUsers().subscribe(
        users => {this.users = users}
    );

  }

  ngOnInit() {
  }

}

interface Users{
  id: number,
  firstname: string,
  surname: string,
  email: string,
  created_at: string,
  updated_at: string,
}
