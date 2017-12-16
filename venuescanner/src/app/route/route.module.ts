import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../login/login.component';
import { ListComponent } from './../user/list/list.component';
import { AddComponent } from './../user/add/add.component';

const route: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user/list', component: ListComponent },
  { path: 'user/new', component: AddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class RouteModule { }
