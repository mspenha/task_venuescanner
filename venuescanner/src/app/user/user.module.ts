import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, AddComponent, EditComponent]
})
export class UserModule { }
