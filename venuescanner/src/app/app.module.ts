import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './user/list/list.component';
import { SidebarComponent } from './user/layout/sidebar/sidebar.component';
import { NavComponent } from './user/layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    SidebarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
