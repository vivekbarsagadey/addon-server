import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules.component';
import { RulesListComponent } from './rules-list/rules-list.component';
import { RulesCreateComponent } from './rules-create/rules-create.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    RulesComponent,
    RulesListComponent,
    RulesCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RulesComponent
      },
      {
        path: 'new',
        component: RulesCreateComponent
      },
      {
        path: 'edit/:id',
        component: RulesCreateComponent
      }
    ])
  ]
})
export class RulesModule { }
