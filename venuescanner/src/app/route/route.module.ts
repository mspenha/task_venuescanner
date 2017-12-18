import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../login/login.component';
import { ListComponent } from './../user/list/list.component';
import { AddComponent } from './../user/add/add.component';
import { EditComponent } from './../user/edit/edit.component';

import { AuthGuard } from './../guard/auth.guard';

const route: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user/list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'user/new', component: AddComponent, canActivate: [AuthGuard] },
  { path: 'user/edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'user/list', pathMatch: 'full' },
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
