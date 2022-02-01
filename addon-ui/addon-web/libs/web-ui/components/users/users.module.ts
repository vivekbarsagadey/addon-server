import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'new',
        component: UsersCreateComponent
      },
      {
        path: 'edit/:id',
        component: UsersCreateComponent
      }
    ])
  ]
})
export class UsersModule { }
