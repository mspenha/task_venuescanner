import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, AddComponent, EditComponent, SidebarComponent, NavComponent]
})
export class UserModule { }
