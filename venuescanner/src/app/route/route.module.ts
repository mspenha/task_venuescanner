import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../login/login.component';
import { ListComponent } from './../user/list/list.component';

const route: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user/new', component: ListComponent }
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
