import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesCreateComponent } from './roles-create/roles-create.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    RolesComponent,
    RolesListComponent,
    RolesCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RolesComponent
      },
      {
        path: 'new',
        component: RolesCreateComponent
      },
      {
        path: 'edit/:id',
        component: RolesCreateComponent
      }
    ])
  ]
})
export class RolesModule { }
