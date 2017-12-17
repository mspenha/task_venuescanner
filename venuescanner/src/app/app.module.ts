import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './user/list/list.component';
import { AddComponent } from './user/add/add.component';
import { SidebarComponent } from './user/layout/sidebar/sidebar.component';
import { NavComponent } from './user/layout/nav/nav.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    SidebarComponent,
    NavComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
