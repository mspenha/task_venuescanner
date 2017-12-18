import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteModule } from './route/route.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './user/list/list.component';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';
import { SidebarComponent } from './user/layout/sidebar/sidebar.component';
import { NavComponent } from './user/layout/nav/nav.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    SidebarComponent,
    NavComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
